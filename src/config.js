const dev = {
  STRIPE_KEY:
    "pk_test_51GrGbzHbRYeES3pZ5WBcztLvOOTA6R387FbqvlsKgW66tkueq5wkl0EIDF8TRz9UVAn7J3qx8P0BE23VVXGBoB8J00P6EHPdao",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-e4kyu3hwxjrp",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vcxmdpu2id.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_lXOuCzPXR",
    APP_CLIENT_ID: "6h93js1opegpno5v9pvqfd14jk",
    IDENTITY_POOL_ID: "us-east-1:b0c4f7d1-1a23-4446-b36e-0bfb09677194",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51GrGbzHbRYeES3pZ5WBcztLvOOTA6R387FbqvlsKgW66tkueq5wkl0EIDF8TRz9UVAn7J3qx8P0BE23VVXGBoB8J00P6EHPdao",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-bvcpcoz7nry9",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://hd490eyzyc.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_byNCisNFE",
    APP_CLIENT_ID: "1jtipkk3g4dt2uv7sfaiupajui",
    IDENTITY_POOL_ID: "us-east-1:dcc16f83-b711-430d-a868-a541cb922e0f",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
