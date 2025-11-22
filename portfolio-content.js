// ============================================
// MANUAL PORTFOLIO CONTENT
// Edit this file directly to add your content
// ============================================

const PortfolioContent = {
    // Profile Picture
    // Save your image to: assets/profile/your-image.jpg
    profileImage: "assets/profile/Rosario, Shan Hiro T.png",  // Change this to your image path
    
    // About Me
    aboutMe: {
        title: "Shan Hiro Rosario",
        subtitle: "ITE Elective Eportfolio | 4th Year Student",
        content: `Welcome to my academic e-portfolio! I am a passionate machine learning practitioner dedicated to advancing my knowledge and skills in artificial intelligence and data science.

This portfolio showcases my academic journey, including activities, projects, and reflections from my coursework. Feel free to explore my work and learn about my experiences.

The document below contains a reflective post based on the required readings and independent research, specifically the Exercise 1. It discusses initial learning about Machine Learning (ML), Deep Learning (DL), and Natural Language Processing (NLP), expectations for this course, and their relevance to my career goals in IT. It should be noted that you will not be downloading the document, simply opening it on this page.

Note: You can preview it here: <a href="#" class="document-link" onclick="openPdfModal('1exercise.pdf'); return false;">Document</a>`
    },

    // Documents
    // Save PDFs to: assets/documents/filename.pdf
    // Then add them here:
    documents: [
        {
            filename: "1exercise.pdf",  // Just the filename, file should be in assets/documents/
            name: "Document"  // Display name for the link
        }
        // Add more documents like this:
        // { filename: "another-doc.pdf", name: "Another Document" }
    ],

    // Certificates
    // Save images to: assets/certificates/your-image.jpg
    certificates: [
        {
            title: "Database",
            date: "May 15, 2024",
            issuer: "Certiport",
            image: "assets/certificates/database cert.png"  // Change this path
        },

        {
            title: "ITF Fundamentals",
            date: "December 16, 2022",
            issuer: "CompTIA",
            image: "assets/certificates/ITF Fundamentals.png"  // Change this path
        }
        // Add more certificates like this:
        // { title: "Another Cert", date: "Feb 2024", issuer: "Org", image: "assets/certificates/cert2.jpg" }
    ],

    // Activities
    // Save activity images to: assets/activities/prelims/, assets/activities/midterms/, or assets/activities/finals/
    // 
    // Structure:
    // - id: Unique identifier (use "1", "2", "3", etc.)
    // - title: Activity title
    // - description: Brief description
    // - date: Date of the activity
    // - thumbnail: Preview image shown on prelims/midterms/finals page (save to assets/activities/<section>/)
    // - images: Array of supporting images with descriptions (shown on activity detail page)
    //   Each image needs:
    //     - url: File path (e.g., "assets/activities/prelims/image1.jpg")
    //     - description: Explanation of the image (e.g., "Confusion matrix showing 95% accuracy")
    activities: {
        prelims: [
            {
                id: "1",
                title: "Week 1",
                description: "Exercise 1: Eportfolio",
                date: "July 29, 2025",
                thumbnail: "assets/activities/prelims/Activity 1.png",  // Preview image (shown on prelims page)
                images: [
                    {
                        url: "assets/activities/prelims/Activity 1.png",
                        description: "First Eportfolio made"
                    },
                    {
                        url: "assets/activities/prelims/Activity 1 Score.png",
                        description: "The score for the activity."
                    }

                ]
            },
            {
                id: "2",
                title: "Week 2",
                description: "Exercise 2 - NLP Text PreProcessing. My learning reflection for this is the key foundation for preprocessing NLP tasks such as stopwords removal and lowercase values because some models like BERT pretrained from huggngface uses BERT-uncased. Special characters removal is also implemented here like the regex application, and the most important part is definitely applying tokenization so that the model can actually process the dataset that i have especially since the dataset i have is a SMS dataset full of slangs, therefore i also created a slang dictionary that standardizes the slangs such as the word 'wer r u' becomes 'where are you' for better results.",
                date: "September 13, 2025",
                thumbnail: "assets/activities/prelims/Activity 2.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/prelims/Activity 2.png",
                        description: "Exercise 2 - NLP Text PreProcessing"
                    },
                    {
                        url: "assets/activities/prelims/Activity 2 Score.png",
                        description: "The score for the activity."
                    }
                ]
            },
            {
                id: "3",
                title: "Week 3",
                description: "Exercise #3: Text Representation. My learning reflection for this exercise is that it helped me understand what are the Bag-of-Words and TF-IDF. Basically its just transforming the dataset we have into numerical data for machine learning. I did some comparison analysis for this exercise and found out that BoW is simple and efficient however, worse because it simply represents each letters in a vector space, while TF-IDF gives better results because it captures word importance by highlighting meaningful terms and reducing the weight of common words. I realized that choosing the right text representation method depends on the dataset and the task, and that TF-IDF often provides more useful insights for classification and analysis",
                date: "August 13, 2025",
                thumbnail: "assets/activities/prelims/Activity 3.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/prelims/Activity 3.png",
                        description: "Exercise 2 - NLP Text PreProcessing"
                    },
                    {
                        url: "assets/activities/prelims/Activity 3 Score.png",
                        description: "The score for the activity."
                    }
                ]
            },
            {
                id: "4",
                title: "Week 4",
                description: "WW: NER Model Evaluation. My reflection learning for this is that NER automatically finds named entities in text and labels them with categories such as Person, Location, Organization, Date, Product, etc. There is some libraries available for this such as such spaCy, however, if the dataset is too task specific that the free library results in low accuracy, then i can create my own named etities but this method takes too much time because there is also a need to create a gold standard to ensure that the accuracy of NER model is excellent through evaluation metrics like accuracy, precision, recall, and f1. I found out that in my exercise that the results has shown that spaCy’s default labeling regarding the context of reviews or comments that consists of fictitious and non fictitious entities proves to be unreliable with low evaluations of less than 50% accuracy in average using the en_core_web_sm model.",
                date: "August 18, 2025",
                thumbnail: "assets/activities/prelims/WW 1.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/prelims/WW 1.png",
                        description: "WW: NER Model Evaluation"
                    },
                    {
                        url: "assets/activities/prelims/WW 1 Score.png",
                        description: "The score for the activity."
                    }
                ]
            },
            {
                id: "5",
                title: "Week 5",
                description: "Prelim Exam. My reflections is that i realized how important both preprocessing and evaluation are in NLP, because it could more or less decide the final outcome and accuracy of the model. I also understand that some entities, like names of people and organizations, were often misclassified because the model needs domain-specific data for training, as opposed to my reflections on the written work, and the exercise 1 provided me the knowledge for preprocessing steps like stopword removal and lowercasing before text representation on exercise 3 because without them, models would process noisy and repetitive data, reducing accuracy. This provided me a thorough understandign in the exam in the importance of preprocessing, representation, and model evaluation in building reliable NLP models ",
                date: "August 25, 2025",
                thumbnail: "assets/activities/prelims/exams.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/prelims/exams.png",
                        description: "Exams Score."
                    }
                ]
            }
        ],
        midterms: [
            // Add midterm activities here
            {
                id: "6",
                title: "Week 7",
                description: "Midterms Eportfolio",
                date: "September 5, 2025",
                thumbnail: "assets/activities/midterms/Activity 6 thumb.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/midterms/Activity 6.png",
                        description: "Midterms Eportfolio."
                    }
                ]
            },
            {
                id: "7",
                title: "Week 8",
                description: "Exercise M2 - Implementing and Evaluating NLP Models. This exercise helped me understandthe different techniques of developing an NLP model like text categorizer, Sentiment Analysis, POS Tagging, Spam Detection and Text Summarizer. In which i built and showcased the step-by-step implementation of the Natural Language Processing Model in the field of Text Classification by exploring the domain of SMS Spam Detection and Movie Reviews for Sentiment Analysis, and Text Summarizer. while The POS Tagging is self-sourced while imitating the writing of a game review and sentiment analysis are for movie reviews. This helped me understand the different tools available for the problems that could potentially be solved because i created a model pipeline through all techniques and shows excellent results despite the low amount of dataset used like 100 records at most for movie reviews.    ",
                date: "September 13, 2025",
                thumbnail: "assets/activities/midterms/Activity 7 thumb.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/midterms/Activity 7.png",
                        description: "Activity Score."
                    },
                    {
                        url: "assets/activities/midterms/Activity 7 doc.png",
                        description: "Activity Document."
                    },
                    {
                        url: "assets/activities/midterms/Activity 7 HAM.png",
                        description: "Evaluation results of HAM or SPAM Model."
                    },
                    {
                        url: "assets/activities/midterms/Activity 7 POS.png",
                        description: "Evaluation results of Parts of Speech Tagging Model."
                    },
                    {
                        url: "assets/activities/midterms/Activity 7 SENT.png",
                        description: "Evaluation results of Sentiment Analysis Model."
                    },
                    {
                        url: "assets/activities/midterms/Activity 7 SUM.png",
                        description: "Evaluation results of Text Summarization Model."
                    }
                    
                ]
            },
            {
                id: "8",
                title: "Week 9",
                description: "Exercise Midterm #3: Building Bert-Based QnA System. My learning refletcions for this is that this is actually the start where we used or leveraged pretrained BERT models from huggingface in which we leveraged the previous exercises 2 for the preprocessing steps, and used a single philippine article for creating 4 models with ground-truth notations. This helps me ensure that the models i build in the future would be based on a robust foundation of preprocessing > model selection and building > Validation, Evaluation and Comparison through experiment logs to find to most optimal performance and hyperparameters that is suitable for the problem at hand. As for the actual models i built in this activity, among the four models, despite that all of them are fine-tuned extractive QnA pretrained models, the Bert-base-cased-squad2 model performed the best on the sample data of a single news article published by the Philippine News Agency, providing 81% exact matches and the lowest amount of average inference time that directly translates to faster response time while being accurate as much as possible, which is more than Distillbert, Bert large, and RoBERT",
                date: "October 1, 2025",
                thumbnail: "assets/activities/midterms/Activity 8 thumb.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/midterms/Activity 8.png",
                        description: "Activity Score."
                    },
                    {
                        url: "assets/activities/midterms/Activity 8 doc.png",
                        description: "Activity Document."
                    },
                    {
                        url: "assets/activities/midterms/Activity 8 results.png",
                        description: "We can see here that i compared 4 models among a set of evaluation metrics on a single philippine news article. Although, theoretically, distillbert should be perfect for such a small data, it performed as poorly. However, when considered that other models like RoBERTa and Bert base has more parameters than distillbert, the results are most likely what should be expected."
                    }
                ]
            },
            {
                id: "14",
                title: "Week 10",
                description: "WW-Research on LLM, Langchain, and RAG. My reflections for this is that RAG and LangChain are the advanced technqiues used for very smart chabots, and the most popular one is ChatGPT. This is also known as Large Language Model and Langchain is responsible for connecting the APis like performing RAG itself, meanwhile RAG solves the Hallucinations that LLMs can sometimes answer by referencing LLM to up to date and relevant external data from the external database by managing prompts better also. This helps me understand how these ChatGPT works, instead of being the consumer, i could potentially be the Developer instead, and also have the capacity to build smart models like a Documentation Codebase Q&A system by implementing RAG and a system's whole programming documentation for easier access. However, RAG is hard to implement because of limited resources at hand, which requires days of training alone.",
                date: "October 3, 2025",
                thumbnail: "assets/activities/midterms/Activity 9 thumb.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/midterms/Activity 9.png",
                        description: "Activity Score."
                    },
                    {
                        url: "assets/activities/midterms/Activity 9 Doc1.png",
                        description: "Activity Document."
                    },
                    {
                        url: "assets/activities/midterms/Activity 9 Doc2.png",
                        description: "Activity Document."
                    }
                ]
            },
            {
                id: "9",
                title: "Week 11",
                description: "Exams. My reflections in the Midterms exams is that it deepened my understanding of LLM because i remember the questions were about describing why LLM hallucinates, in which is answered by the previous activity about the WW Research, however, LLMs by themselves hallucinate because they use the technique where they predict the next most likely word based on patterns it learns during training. This is the next-token prediction, where LLMs actually just fills the gaps even if it lacks information like making up facts, and incorrect answers. This most likely happens when the dataset used for training is bad like imbalanced , noisy, or outdated informations and this is essentailyl solved using RAG because it uses real-time data to supplement the dataset used for training while also improving the prompt of the user itself.",
                date: "October 10, 2025",
                thumbnail: "assets/activities/midterms/exams.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/midterms/exams.png",
                        description: "Exams Score."
                    }
                ]
            }

        ],
        finals: [
            // Add final activities here
            {
                id: "10",
                title: "Week 14",
                description: "Exercise F1 - Final Project Proposal. I learned from this exercise about how to actually research a problem prevailing in the local environment of philippines while ensuring that the previous activities and exercises that i have will be used practically, such as the Preprocessing and Text Representations from Prelims, and the knowledge of Text Classifications from midterms using pretrained BERT while ensuring that me and my groupmate designed the entire process as perfect as possible for a proposal using the standard IEEE format, specifically the Model Development and Problem Statement and Objectives while aliging to SDG standards.",
                date: "October 24, 2025",
                thumbnail: "assets/activities/finals/Activity 9 thumb.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/finals/Activity 9.png",
                        description: "Activity Submission."
                    }
                ]
            },
            {
                id: "11",
                title: "Week 15",
                description: "Exercise F2 - Model Finetuning. My reflections for this exercise is that after designing the development and aligning the objectives, i would personally handle the step-by-step process, starting from preparing the dataset, cleaning it, applying the usual tokenizations, i also learned the use of CUDA through GPU that aids in faster training process because its actually incredibly slow to train especially when epochs are at range 4 to 6 and thus very helpful. Fine tuning in general is using task-specific data by leveraging the pretrained models from Huggingface which atleast is what i did because the pretrained models are usually trained on a general set of data which results in misclassifications or lower accuracy than fine tuning it further. Additionally, i learned that the evaluation metrics of NLP tasks commonly uses accuracy, f1 score and model loss for evaluation and this whole exercise served as baseline model for the final project also.",
                date: "November 4, 2025",
                thumbnail: "assets/activities/finals/Activity 10 thumb.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/finals/Activity 10.png",
                        description: "Activity Submission."
                    },
                    {
                        url: "assets/activities/finals/Activity 10 Hyperparameters.png",
                        description: "I used 5 hyperparameters to finetune the base model to determine the most optimal results. These hyperparameters are epochs, batch_size, learning rate, weight_decay, and warmup_ratio."
                    },
                    {
                        url: "assets/activities/finals/Activity 10 Results.png",
                        description: "The confusion matrix has high precision and recall on the negative sentiment analysis side due to the sheer amount of volume it has, however, its ability to detect positive tweets are much lower, and therefore are prone to misclassifying positive tweets."
                    },
                    {
                        url: "assets/activities/finals/Activity 10 Logs.png",
                        description: "These results indicate the best performance of the model considering the number of epochs and its evaluation loss of 0.38 demonstrating balanced ability to identify both positive and negative sentiment labels while providing a relatively high f1 score of 87%."
                    }
                ]
            },
            {
                id: "12",
                title: "Week 16",
                description: "Exercise F3 - Automated Optimization. My learning reflections on this exercise is that Automated Optimization is incredibly helpful for finding the best performing hyperparameters because its automatic. Although its extremely beneficial, i needed to understand which search are better like Random Search or Grid Search. Fortunately, random search proved to be better because its only processing the hyperparameters based on the range i defined, whereas grid search uses all possible combinations of hyperparameters which is extremely slow and uses up the free resources of google colab much faster and also training time especially considering that we used RoBERTa as the best performing model for our final project and so the training time is very slow and will most likely take up days or even a week if i were to manually fine tune every hyperparameters within a transformer model, of which we used 8.",
                date: "November 22, 2025",
                thumbnail: "assets/activities/finals/Activity 11 thumb.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/finals/Activity 11.png",
                        description: "Activity Submission."
                    },
                    {
                        url: "assets/activities/finals/Activity 11 Dataset.png",
                        description: "The dataset is collected from Kaggle, from the author BwandoWando, using their PHL Tweets on DPWH Flood Control Projects. It has a total corpus of approximately 180,000 DPWH flood-control tweets and the proponents of the study manually labeled 10,000 rows to produce a supervised dataset that has labels of either Negative and Positive while using stratified sampling by label to preserve class proportions or handling class imbalances."
                    },
                    {
                        url: "assets/activities/finals/Activity 11 Hyperparameters.png",
                        description: "In the hyperparameter Random Search Code, i created a function where the library random search will use the mentioned range of input values of the hyperparameters using its built-in method or object called trial. I used 8 hyperparameters for the RoBERTa model that has been chosen to further observe each experiment and determine the best possible performance of the model."
                    },
                    {
                        url: "assets/activities/finals/Activity 11 Results.png",
                        description: "the best performing experiments out of a total of 20, has the hyperparameter batch_size on 8 with moderate to high learning rates and weight decay of 0.03 to 0.06. This directly means that large batch sizes of 32 has low accuracy that most certainly met the ranges of: F1 = 0.72 and accuracy = 0.80 and are often pruned. This means that batch size and number of gradient updates makes the model sensitive. For each epochs per experiment, training is unstable on some experiments because of the fluctuations in F1 which is usually happening when learning rate is too high where the best performing learning rate is at 4.30e-05."
                    },
                    {
                        url: "assets/activities/finals/Activity 11 Logs.png",
                        description: "The experiment indicates several ranges of what are the ranges of hyperparameters are expected to perform well that produces the greatest balance between F1, Accuracy and Evaluation loss in which is the standard evaluation metrics that has been used for the study and this can be seen in the Experimental Logs above."
                    }
                ]
            },
            {
                id: "13",
                title: "Week 18",
                description: "Final Project. my learning reflections for th efinal project is that i combined all the knowledge i gained, from prelims where i used preprocessing methods like Tokenization and regex application to building Bert-Based models in midterms by evaluating different NLP Models like Sentiment Analysis, QnA and so on. The most important part i learned however, is the design of the whole model development in which it encompasses how i prepare the data, actually training the model by Fine-tuning a relevant pretrained model from hugging face, then performing Random Search for our 3 models that we built for comparisons of the best performing model before testing its capabilities on a New data in which we personally labeled ground truth notations of 100 records. This helps me immensely because i already have hands-on experience on using transformer models for complex NLP tasks which serves as an invaluable skillset especially on the current times that is dominated by AI and its related field, therefore the project has affected me by equipping me with the skills to career development because i already have a strong foundation. ",
                date: "November 9, 2025",
                thumbnail: "assets/activities/finals/Activity 12.png",  // Preview image (shown on prelims page)
                images: [
                    // Each image needs: url (file path) and description (your explanation)
                    {
                        url: "assets/activities/finals/Activity 12 doc.png",
                        description: "Activity Submission."
                    },
                    {
                        url: "assets/activities/finals/Activity 12 Dataset.png",
                        description: "The dataset is collected from Kaggle, from the author BwandoWando, using their PHL Tweets on DPWH Flood Control Projects. It has a total corpus of approximately 180,000 DPWH flood-control tweets and the proponents of the study manually labeled 10,000 rows to produce a supervised dataset that has labels of either Negative and Positive while using stratified sampling by label to preserve class proportions or handling class imbalances."
                    },
                    {
                        url: "assets/activities/finals/Activity 12 Hyperparameters.png",
                        description: "We found out the best performing model (we have compared 3 models) and hyperparameters using Random Search. The search was conducted over a predetermined number of 20 trials using the Optuna framework as the optimization backend. The objective of this search was explicitly set to maximize the weighted F1-score, which served as the primary indicator of model efficacy. Upon the completion of all 20 trials, the search algorithm analyzed the results to identify the single trial that yielded the highest weighted F1-score. The set of hyperparameters from this best-performing trial was then extracted and reported as the optimal configuration for the sentiment classification model. This data-driven approach ensures that the final model is tuned for the highest possible performance on the specific task and dataset."
                    },
                    {
                        url: "assets/activities/finals/Activity 12 Results.png",
                        description: "The best performing hyperparameters can be seen in the trial 5 above, whereas the model used is a pretrained BERT, specifically mapsoriano/Roberta-tagalog-Hatespeech from huggingface. The criteria for the best performance is maximizing Accuracy and F1 Score."
                    },
                    {
                        url: "assets/activities/finals/Activity 12 Confusion.png",
                        description: "After finding out the best performing hyperparameters, as well as model, we decided to run a single instance of the best hyperparameters combination to fully observe the evaluation metrics and it shows excellent results of 88% accuracy and f1 score."
                    },
                    {
                        url: "assets/activities/finals/Activity 12 Logs.png",
                        description: "The experiment indicates several ranges of what are the ranges of hyperparameters are expected to perform well that produces the greatest balance between F1, Accuracy and Evaluation loss in which is the standard evaluation metrics that has been used for the study and this can be seen in the Experimental Logs above."
                    },
                    {
                        url: "assets/activities/finals/Activity 12 Ground Truth.png",
                        description: "AFter finding out the best performing model including the sets of 8 parameters used in a Random Search optimization, we proceeded to test the model's capabilities on accepting New Data, whereas we, me and my groupmate decided to manually label 99 tagalog-based tweets for ground-truth test prediction. The results are promising in whicvh it showcases 85% accuracy and f1 score on the New Data provided."
                    }
                ]
            }
        ]
    },

    // Learning Reflections
    // Each section has 4 types of reflections:
    // 1. wholePeriod - Overall reflection for the entire period
    // 2. laboratoryExercises - Reflection on laboratory exercises
    // 3. assignments - Reflection on assignments
    // 4. exams - Reflection on exams
    reflections: {
        prelims: {
            wholePeriod: "Understanding Named Entity Recognition or NER builds the foundation for advanced NLP tasks because NER, at its core concept, is the ability to provide the machine an initial form of context-awareness for the sentences or dataset that will be used for sentiment analysis, text extraction or other NLP technologies for the reason at hand lies in the inability of Text-Representation Methods such as TF-IDF, Bag of words, etc cannot provide context-awareness or some semblance of it during the preprocessing stage. The preprocessing pipeline is where raw text is turned into stable, reliable inputs for models. Steps typically include cleaning (removing or normalizing punctuation/or slangs, URLs), tokenization (splitting text into tokens/words), normalization (lowercasing), and stopword removal to reduce unnecessary data that may affect the overall output of the model because it may provide undesired results because it got lost in the context of unecessary words. Each step reduces noise and helps models learn real patterns faster and more robustly. Working with a small dataset like we have done in the prelims is a good controlled environment to learn effects of each preprocessing step. It lets you inspect intermediate outputs (tokenizations, vectorization, stopword removals etc.) and measure how each change affects model behavior before scaling to larger data Bag-of-Words creates a vocabulary of tokens and represents documents as counts of those tokens, producing high-dimensional, sparse vectors. However, it must be noted that BoW counts frequencies but does not preserve word order or syntactic position — it's a bag not sequence that can locate positions unlike dictionary lookup. Bag of words suffers from memory problems because of its design of vectors and this is where tf-idf comes in because it improves on pure counts by down-weighting very common words (high document frequency) and up-weighting terms that are less-used across documents. That helps models that will be implemented on later topics to focus on informative features. Removing stopwords (for example common words like \"the\", \"is\", \"and\") is often a necessary precursor for BoW/TF-IDF because those words add many features that carry little information or context within the sentence that turns it unnecessary or excess words. Excess and irrelevant features increase processing time, enlarge memory usage, and can degrade the overall model performance.",
            laboratoryExercises: "It must be understood that in data science, specifically in the machine learning and deep learning field, a practitioner must exercise his outmost effort in the preprocessing pipeline. For the prelims period, we focused on preparing the data, even if it is a dummy data consisting of a limited number of words in order to fully grasp the semantics and importance of preprocessing in terms of NLP tasks as advanced as it may be, these methodologies remains useless if the practititioner does not fully understand its concepts. For example, bag of words counts the frequency of occurences a word appears in a sentence. However, it suffers from large documents due to its design of storing each words in tokens to place it in a vector. However, it suffers from large amounts of data whereas TF-IDF performs better in that area due to its reduction of common words and highlights more discriminative words for classification due to its design of placing weights upon each tokens. Stopwords removal is an important prerequisite before these text representation methods because it could add alot of irrelevant features that clutters the model. which results in higher processing times and other problemms that appears out of context in certain nuances.",
            assignments: "Understanding Named Entity Recognition or NER builds the foundation for advanced NLP tasks because NER, at its core concept, is the ability to provide the machine an initial form of context-awareness for the sentences or dataset that will be used for sentiment analysis, text extraction or other NLP technologies for the reason at hand lies in the inability of Text-Representation Methods such as TF-IDF, Bag of words, etc cannot provide context-awareness or some semblance of it during the preprocessing stage.",
            exams: "."
        },
        midterms: {
            wholePeriod: "The midterm period are mostly the hands-on application of several NLP models. like the Text Classification, POS tagging, Text Summarizer and Sentiment Analysis. This is a valuable experience because at this point, we are already leveraging transformer-based models, which can be considered as advanced in the machine learning field by utilizing pretrained bert models from hugging face. This is useful i believe, because i learned the actual implementation process including the desiging the objective and problem statement, in which i could intuitively understand how some problems can be solved immediately using QnA models, like utilizing Articles to find out key words immediately, which is important for fact-checking or for someone in the journalism industry. However, i understand also that there are limitaitons to this, especially when the model, although high confidence, can provide inaccurate answers and so further fine-tuning and creating alot of records of ground-truth data can increase its capabilities. Although an extractive QnA model is not on the same level as LLM and RAG based systems, i think it can provide as the foundation for further learning, and i understand it by referencing programming logic such as learning data types, arguments and functions are the foundation for writing and understanding abstractions, or exception handling. For example, if a problem arises in that the company needs to analyze customer reviews, then Sentiment Analysis is most likely needed. If there is a need to identify or extract names, dates and locations from company reports then NER is useful while POS Tagging could be implemented on chatbots or speech recognition as it analyzes the grammar, such as noun, verb, adj etc. Text classification's use case is most commonly spam detection, but i think it could also use the same 'email' domain whereas messages or emails can be routed to the correct department, or a simple hate speech detection model to ensure that words are filtered. ",
            laboratoryExercises: "Share your experiences, insights, and learnings from the laboratory exercises during the midterms period. Reflect on the hands-on activities, experiments, and practical applications you worked on.",
            assignments: "Share your experiences, insights, and learnings from the assignments during the midterms period. Reflect on the challenges you faced, the concepts you applied, and what you learned.",
            exams: "Share your experiences, insights, and learnings from the exams during the midterms period. Reflect on your preparation, the topics covered, and how you performed."
        },
        finals: {
            wholePeriod: "The Final term tested my abilities in working in collaboration with somebody, my groupmate in creating a project that closely resembles real world scenario or a Transformer Model that can be applied in the local environment of the Philippines. I believe we did excellent on building the model pipeline itself through finetuning a pretrained bert model from huggingface, however, the most challenging scenario is first and foremost, finding a suitable dataset that could align with the local environment. This is because most datasets that can be used are the usual common data of sentiment analysis in ecommerce reviews or because of lacking enough records, columns or even a reliable dataset that could be used. Fortunately, we found a tagalog based sentiment on twitter opinions about government projects in which an inspiration came to us whereas an extremely prevalent problem of corruption is prevailing on the country, so through the data we have, we could ensure that there is a form of measurement of the performance of government projects through public opinion, in which, hopefully can be used in determining accountability. On the fine-tuning aspect, we could surmise that the greatest problem is regarding the resource consumption of the available google colab tier, of which several of our accounts couldnt be used anymore because storage is full as we used a pretrained Roberta from huggingface. This is solved accordingly because there are 2 of us working and has several backup accounts. Additionally, the code pipeline itself is given by the instructor so we have a reference on building the model from previous activities therefore, there is little considerations to be made on that part. Lastly, a suitable dataset does not mean that its accuracy are high. We personally experienced this as in the initial runtime of the baseline model, we have low accuracies that hit 70% and high loss as well. This was solved by using preprocessing methods, and personally labeling the 9k records regarding the correct sentiments of each rows. Autoamted Optimization meanwhile, just took a lot of time the greater the amount of data we used and depending on the model, like RoBERTa takes longer than distillbert.",
            laboratoryExercises: "Share your experiences, insights, and learnings from the laboratory exercises during the finals period. Reflect on the hands-on activities, experiments, and practical applications you worked on.",
            assignments: "Share your experiences, insights, and learnings from the assignments during the finals period. Reflect on the challenges you faced, the concepts you applied, and what you learned.",
            exams: "Share your experiences, insights, and learnings from the exams during the finals period. Reflect on your preparation, the topics covered, and how you performed."
        }
    }
};



