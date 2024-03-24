# AI Chatbot

# Index

- [AI Chatbot](#ai-chatbot)
- [Index](#index)
- [Introduction](#introduction)
  - [Techstack](#techstack)
- [How to setup](#how-to-setup)
  - [Clone the repo](#clone-the-repo)
  - [Install dependencies](#install-dependencies)
  - [Create a .env file in "week1" folder](#create-a-env-file-in-week1-folder)
- [Finally run the webapp](#finally-run-the-webapp)
- [License](#license)



# Introduction

AI Chatbot is a straightforward chatbot designed to provide solutions to various queries using the Gemini API. Whether you're seeking assistance with a problem or seeking information, this chatbot aims to deliver prompt and helpful responses.

## Techstack
 
    - Vite + ReactJS with Typescript
    - Tailwind CSS
    - Gemini

# How to setup

## Clone the repo

Clone the repo

```bash
git clone git@github.com:AAshu1412/ai-homework.git
cd "ai-homework/week1"
```
## Install dependencies

```bash
npm install
```
## Create a .env file in "week1" folder

Create a .env file in "week1" folder  
```bash
touch .env
```

Add the following variables:

```bash
GEMINI_API_KEY=    ----------Enter Your Gemini API Key----------
```

 # Finally run the webapp 

```bash
npm run dev
```

The webapp will be running on [localhost](localhost:5173)

To open the same application of another device for testing purposes, make sure that the device is connected to the same network as the device on which the webapp is running. Then visit http://<IP_ADDRESS_OF_THE_DEVICE_RUNNING_THE_WEBAPP>:5173

# License

The projects is licensed under [MIT](https://choosealicense.com/licenses/mit/)
