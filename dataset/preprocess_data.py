import pandas as pd 

# Make sure to use the correct path to your JSON file
file_path = '/Users/ameena/Desktop/app/dataset/full_format_recipes.json'
with open(file_path) as f:
    data = pd.read_json(f)

data = pd.read_json('/Users/ameena/Desktop/app/dataset/full_format_recipes.json')

# Get an overview of the dataset
data.info()

# Dropping the 'date' column from the DataFrame
data.drop(columns=['date'], inplace=True)

# Remove rows where specific columns are null
data.dropna(subset=['title', 'ingredients', 'directions', 'sodium'], inplace=True)

# Fill nulls in 'desc' column with 'No description'
data['desc'] = data['desc'].fillna('No description')

# Remove duplicate entries based on 'title'
data.drop_duplicates(subset='title', inplace=True)

# use data to save the cleaned dataset
data.to_json('/Users/ameena/Desktop/app/dataset/cleaned_recipes.json')
