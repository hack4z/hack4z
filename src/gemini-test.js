//Text from text & image

import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'node:fs';

const genAI = new GoogleGenerativeAI("GEMINI_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

const prompt = "Describe how this product might be manufactured.";
const imagePart = fileToGenerativePart("/path/to/image.png", "image/png");

const result = await model.generateContent([prompt, imagePart]);
console.log(result.response.text());


//text stream
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("GEMINI_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContentStream(prompt);

for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  process.stdout.write(chunkText);
}


//Configuration
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("GEMINI_API_KEY");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const result = await model.generateContent({
    contents: [
        {
          role: 'user',
          parts: [
            {
              text: "Explain how AI works",
            }
          ],
        }
    ],
    generationConfig: {
      maxOutputTokens: 1000,
      temperature: 0.1,
    }
});

console.log(result.response.text());

// Set the system instruction during model initialization
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are a cat. Your name is Neko.",
});

//Base64 encoded images <= 20mb
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

const imageResp = await fetch(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/2560px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg'
)
    .then((response) => response.arrayBuffer());

const result = await model.generateContent([
    {
        inlineData: {
            data: Buffer.from(imageResp).toString("base64"),
            mimeType: "image/jpeg",
        },
    },
    'Caption this image.',
]);
console.log(result.response.text());

//Multiple
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

const imageResp1 = await fetch(IMAGE_PATH_1).then((response) => response.arrayBuffer());
const imageResp2 = await fetch(IMAGE_PATH_2).then((response) => response.arrayBuffer());

const result = await model.generateContent([
    {
        inlineData: {
            data: Buffer.from(imageResp1).toString("base64"),
            mimeType: "image/jpeg",
        },
    },
    {
        inlineData: {
            data: Buffer.from(imageResp2).toString("base64"),
            mimeType: "image/jpeg",
        },
    },
    'Generate a list of all the objects contained in both images.',
]);
console.log(result.response.text());


//The File API lets you store up to 20 GB of files per project, with a per-file maximum size of 2 GB. Files are stored for 48 hours. They can be accessed in that period with your API key, but cannot be downloaded from the API. It is available at no cost in all regions where the Gemini API is available.


// Make sure to include these imports:
// import { GoogleAIFileManager } from "@google/generative-ai/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
const fileManager = new GoogleAIFileManager(process.env.API_KEY);

const uploadResult = await fileManager.uploadFile(
  `${mediaPath}/jetpack.jpg`,
  {
    mimeType: "image/jpeg",
    displayName: "Jetpack drawing",
  },
);
// View the response.
console.log(
  `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`,
);

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const result = await model.generateContent([
  "Tell me about this image.",
  {
    fileData: {
      fileUri: uploadResult.file.uri,
      mimeType: uploadResult.file.mimeType,
    },
  },
]);
console.log(result.response.text());


//Verify image uploads and get metadata
// Make sure to include these imports:
// import { GoogleAIFileManager } from "@google/generative-ai/server";
const fileManager = new GoogleAIFileManager(process.env.API_KEY);

const uploadResponse = await fileManager.uploadFile(
  `${mediaPath}/jetpack.jpg`,
  {
    mimeType: "image/jpeg",
    displayName: "Jetpack drawing",
  },
);

// Get the previously uploaded file's metadata.
const getResponse = await fileManager.getFile(uploadResponse.file.name);

// View the response.
console.log(
  `Retrieved file ${getResponse.displayName} as ${getResponse.uri}`,
);

//prompt with multiple files
async function run() {
  // Choose a Gemini model.
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = "Write an advertising jingle showing how the product in the first image could solve the problems shown in the second two images.";

  const imageParts = [
    filePart1,
    filePart2,
    filePart3,
  ];

  const generatedContent = await model.generateContent([prompt, ...imageParts]);
  
  console.log(generatedContent.response.text());
}

run();


//Bounding box object
// filePart = ...
// filePart2 has the piranha.

async function findBox(filePart) {
  // Choose a Gemini model.
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = "Return a bounding box for the piranha. \n [ymin, xmin, ymax, xmax]";

  const generatedContent = await model.generateContent([prompt, filePart]);
  
  console.log(generatedContent.response.text());
}

run(filePart);
