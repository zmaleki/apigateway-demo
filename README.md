# apigateway-demo

Demo of creating a basic apigateway using sam

Download this typescript base package:

```
npm install

npm run build

sam package --s3-bucket $SAM_BUCKET \
            --s3-prefix PACKAGED/v1/first-deployment \
            --output-template-file template.packaged.yaml

sam deploy --s3-bucket $SAM_BUCKET \
          --s3-prefix PACKAGED/v1/first-deployment \
          --template-file .dist/template.packaged.yaml \
          --stack-name apigateway-demo \
          --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_IAM
```
