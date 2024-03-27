import pandas as pd
import json
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import nltk
import unicodedata
import os

nltk.download('wordnet')
nltk.download('stopwords')

def clean_directions(directions):
    # Decode Unicode escape sequences and normalize
    directions = [unicodedata.normalize('NFKC', d) for d in directions]
    # Normalize temperature format
    cleaned_directions = []
    for direction in directions:
        # Replace the Unicode degree symbol with a plain text symbol, followed by 'F'
        direction = re.sub(r'(\d+)\u00b0F', r'\1°F', direction)
        direction = re.sub(r'(\d+)\u00b0 F', r'\1°F', direction)
        direction = re.sub(r'(\d+)\u00b0', r'\1°F', direction)
        # Fix any temperatures that are missing the degree symbol
        direction = re.sub(r'(\d+)F', r'\1°F', direction)
        direction = re.sub(r'(\d+) F', r'\1°F', direction)
        # Remove the extra 'F' if present
        direction = re.sub(r'(\d+)°F+', r'\1°F', direction)
        cleaned_directions.append(direction)
    return cleaned_directions

# Load the JSON data into a DataFrame
file_path = '/Users/ameena/Desktop/app/backend/dataset/full_format_recipes.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = pd.read_json(f)

# Make sure to use the correct path to your JSON file
file_path = '/Users/ameena/Desktop/app/backend/dataset/full_format_recipes.json'
with open(file_path) as f:
    data = pd.read_json(f)

# Dropping the 'date' column from the DataFrame
data.drop(columns=['date'], inplace=True)

# Dropping rows where there is no description
data = data.dropna(subset=['desc'])

# Remove rows where specific columns are null
data.dropna(subset=['title', 'ingredients', 'directions', 'sodium'], inplace=True)

# Fill nulls in 'desc' column with 'No description'
json_data = ''  # Define the variable "json_data" before using it

# Remove duplicate entries based on 'title'
data.drop_duplicates(subset='title', inplace=True)

# Separating code and JSON-like data using regular expressions
code = re.findall(r'\"(.*?)\"', json_data)
json_data = re.sub(r'\"(.*?)\"', '', json_data)

# Cleaning up the JSON-like data to make it a valid JSON
json_data = json_data.replace('\n', '').replace('}{', '},{')

# Clean categories by removing empty strings and ensuring all entries are strings
data['categories'] = data['categories'].apply(lambda x: [str(i) for i in x if i])

# Create a DataFrame from the data
df = pd.DataFrame(data)
# Clean the 'directions' before any other processing that depends on it
data['directions'] = data['directions'].apply(clean_directions)

# Clean categories by removing empty strings and ensuring all entries are strings
data['categories'] = data['categories'].apply(lambda x: [str(i) for i in x if i])

# Extract the relevant columns
df = df[["title", "directions", "ingredients", "categories", "calories", "protein", "sodium", "desc"]]

# Clean the 'directions' before any other processing that depends on it
df['directions'] = df['directions'].apply(clean_directions)

# Clean categories by removing empty strings and ensuring all entries are strings
df['categories'] = df['categories'].apply(lambda x: [str(i) for i in x if i])

# Print the first 10 rows and columns
print(df.iloc[:20, :10])

# Get the shape of the DataFrame
print(df.shape)

# # Use df to save the cleaned dataset (notice that df is the correct DataFrame object)
# output_path = '/Users/ameena/Desktop/app/backend/dataset/cleaned_recipes.json'
# df.to_json(output_path, orient='records', lines=True)

# Save the DataFrame as a JSONL file
output_path_jsonl = '/Users/ameena/Desktop/app/backend/dataset/cleaned_recipes.jsonl'
df.to_json(output_path_jsonl, orient='records', lines=True)