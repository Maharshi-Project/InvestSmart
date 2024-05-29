
# InvestSmart - RAG Application

This project is a sophisticated Retrieval-Augmented Generation (RAG) application developed using LangChain. It allows users to input links to business articles and ask questions related to the content of those articles. The system leverages advanced technologies to provide accurate and context-aware responses, offering features such as summary generation, multilingual support, and text-to-speech functionality.

Key Components :

*Link-Based Query System*: Users can provide URLs to business articles.
The application processes these articles to generate embeddings and store them in a vector database.
Vector Database

*FAISS*: Facebook AI Similarity Search (FAISS) is used as the vector database to store and manage the embeddings generated from the articles. This allows for efficient similarity searches when queries are made.
Language Model

*GPT-3.5*: OpenAI's GPT-3.5 is used as the language model (LLM) for generating answers. When a query is received, a similarity search is performed on the vector database, and the most relevant embeddings are fed to GPT-3.5 to produce a contextually accurate response.
Summary Generation

*Gemini LLM*: Implemented summary generation using Gemini LLM, enabling users to quickly understand the gist of the articles without reading them in full.
Multilingual Support

The application supports ***multiple languages***, allowing users to ask questions and receive responses in their preferred language.

Integrated ***text-to-speech*** functionality to convert the generated answers and summaries into spoken words, enhancing accessibility and user experience.
