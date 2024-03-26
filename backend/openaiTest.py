import os
from openai import OpenAI
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')


function_descriptions = [ 
                         {
                          "name": "generate_recipe",
                          "description": "Generates a recipe based on the ingredients you have."
                         },
                         {
                          "name": "get_recipe_suggestions",
                          "description": "Get recipe suggestions based on the ingredients you have."
                         },
                         {
                          "name": "get_recipe_info",
                          "description": "Get information about a specific recipe."
                         },
                         {
                          "name": "get_recipe_instructions",
                          "description": "Get instructions for a specific recipe."
                         },
                         {
                          "name": "get_recipe_ingredients",
                          "description": "Get ingredients for a specific recipe."
                         },
                         {
                          "name": "get_recipe_nutrition",
                          "description": "Get nutrition information for a specific recipe."
                         },
                         {
                          "name": "get_recipe_categories",
                          "description": "Get categories for a specific recipe."
                         },
                         {
                          "name": "get_recipe_cuisines",
                          "description": "Get cuisines for a specific recipe."
                         },
                         {
                          "name": "get_recipe_diets",
                          "description": "Get diets for a specific recipe."
                         },
                         {
                          "name": "get_recipe_occasions",
                          "description": "Get occasions for a specific recipe."
                         },
                         {
                          "name": "get_recipe_meal_types",
                          "description": "Get meal types for a specific recipe."
                         },
                         {
                          "name": "get_recipe_cooking_methods",
                          "description": "Get cooking methods for a specific recipe."
                         },
                         {
                          "name": "get_recipe_cooking_equipment",
                          "description": "Get cooking equipment for a specific recipe."
                         },
                         {
                          "name": "get_recipe_cooking_tools",
                          "description": "Get cooking tools for a specific recipe."
                         },
                         {
                          "name": "get_recipe_cooking_ingredients",
                          "description": "Get cooking ingredients for a specific recipe."
                         },
                         {
                          "name": "get_recipe_cooking_times",
                          "description": "Get cooking times for a specific recipe."
                         },
                         {
                          "name": "get_recipe_cooking_temperatures",
                          "description": "Get cooking temperatures for a specific recipe."
                         },
                        
                         
                         ]


# Create a ChatCompletion request to OpenAI
completion = openai.ChatCompletion.create(
  engine="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is the purpose of life?"},
  ],
  max_tokens=5
)
output = completion.choices[0].message.content
print(output)
