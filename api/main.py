from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
from fastapi import Path


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("RCNN_crop_weed_classification_model_2.h5") 
class_names=["backgorund","crop","weed"]

MODEL1= tf.keras.models.load_model("/Users/sharvarisoparkar/Desktop/MiniProject/Models/1")
CLASS_NAMES1 = ['Potato__Early_blight', 'Potato___Late_blight', 'Potato__healthy']

MODEL3 = tf.keras.models.load_model("/Users/sharvarisoparkar/Desktop/MiniProject/Models/3")
CLASS_NAMES3 = ['Pepper_bell__Bacterial_spot', 'Pepper_bell_healthy']

MODEL2= tf.keras.models.load_model("/Users/sharvarisoparkar/Desktop/MiniProject/Models/2")
CLASS_NAMES2 = ['Bacterial spot rot', 'Black Rot', 'Disease Free', 'Downy Mildew']

MODEL4= tf.keras.models.load_model("/Users/sharvarisoparkar/Desktop/MiniProject/Models/4")
CLASS_NAMES4 =['Tomato___Bacterial_spot',
 'Tomato___Early_blight',
 'Tomato___Late_blight',
 'Tomato___Leaf_Mold',
 'Tomato___Septoria_leaf_spot',
 'Tomato___Spider_mites Two-spotted_spider_mite',
 'Tomato___Target_Spot',
 'Tomato___Tomato_mosaic_virus',
 'Tomato___healthy']

MODEL5= tf.keras.models.load_model("/Users/sharvarisoparkar/Desktop/MiniProject/Models/5")
CLASS_NAMES5 = ['Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
 'Corn_(maize)___Common_rust_',
 'Corn_(maize)___Northern_Leaf_Blight',
 'Corn_(maize)___healthy']

MODEL6= tf.keras.models.load_model("/Users/sharvarisoparkar/Desktop/MiniProject/Models/6")
CLASS_NAMES6 = ['Bacterialblight', 'Blast', 'Brownspot', 'Tungro', '_Healthy', '_Hispa']


@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image


@app.post("/predict")
async def predict(
    file:UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image,0)
    predictions = MODEL.predict(img_batch)

    predicted_class=class_names[np.argmax(predictions[0])]
    confidence=np.max(predictions[0])
    
    return{
        'class':predicted_class,
        'confidence':float(confidence)
    }


@app.post("/predict/{model}")
async def predict1(
       model: int,
    file: UploadFile = File(...),
):   
   
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    if model == 1: 
        predictions = MODEL3.predict(img_batch)
        predicted_class = CLASS_NAMES3[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])
    elif model == 2:
        predictions = MODEL1.predict(img_batch)
        predicted_class = CLASS_NAMES1[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])
    elif model == 3:
        predictions = MODEL2.predict(img_batch)
        predicted_class = CLASS_NAMES2[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])
    elif model == 5:
        predictions = MODEL5.predict(img_batch)
        predicted_class = CLASS_NAMES5[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])
    elif model == 4:
        predictions = MODEL4.predict(img_batch)
        predicted_class = CLASS_NAMES4[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])
    elif model == 6:
        predictions = MODEL6.predict(img_batch)
        predicted_class = CLASS_NAMES6[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])
    else:
        return {"error": "Invalid model ID. Supported models: 1, 2"}

    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8080)