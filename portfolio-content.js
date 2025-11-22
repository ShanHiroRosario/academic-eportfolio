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
                description: "Exercise 2: NLP Techniques",
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
                description: "Exercise #3: Text Representation",
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
                description: "WW: NER Model Evaluation",
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
                description: "Prelim Exam",
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
                description: "Exercise M2 - Implementing and Evaluating NLP Models",
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
                description: "Exercise Midterm #3: Building Bert-Based QnA System",
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
                description: "WW-Research on LLM, Langchain, and RAG",
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
                description: "Exams",
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
                description: "Exercise F1 - Final Project Proposal",
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
                description: "Exercise F2 - Model Finetuning",
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
                description: "Exercise F3 - Automated Optimization",
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
                description: "Final Project",
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



