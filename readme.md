# 🛠 Bedrock Loot-Table Generator

**⭐ [View the Website](https://bedrock-oss.github.io/bedrock-windmill/) ⭐**

This website allows you to create Loot Tables for the Bedrock Edition of Minecraft. For support, you may join the [Bedrock OSS Discord](https://discord.gg/XjV87YN).

![image](https://user-images.githubusercontent.com/18729296/141279899-32898eaf-5db3-4621-aabc-4678e51649ea.png)

- **Note: This repo uses the [json-editor](https://github.com/json-editor/json-editor) library.**

## Running Locally

To test locally, you may use the flask server included in this project:

### First time setup
 - Create venv: `python -m venv venv`
 - `./venv/Scripts/Activate`
 - `pip install flask`

### Running
 - `set FLASK_APP=app`
 - `flask run`
 - Available at: `http://127.0.0.1:5000/`