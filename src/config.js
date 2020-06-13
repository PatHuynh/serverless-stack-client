export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-pldhuynh",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wmbehgwb9b.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_VD5AeI05w",
    APP_CLIENT_ID: "qfa7cgeg81sep28bcfk7204so",
    IDENTITY_POOL_ID: "us-east-1:0efc5251-cab2-46c1-a5f9-2d81b50ce2b6",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51GrGbzHbRYeES3pZ5WBcztLvOOTA6R387FbqvlsKgW66tkueq5wkl0EIDF8TRz9UVAn7J3qx8P0BE23VVXGBoB8J00P6EHPdao",
};
