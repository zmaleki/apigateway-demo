# apigateway-demo

Demo of creating a basic api gateway using sam

Download this typescript base package:

npm install

```
sam package \
            --s3-bucket $SAM_BUCKET \
            --s3-prefix PACKAGED/v1/first-deployment \
            --output-template-file template.packaged.yaml
```

npm run build

```
sam deploy \
          --s3-bucket $SAM_BUCKET \
          --s3-prefix PACKAGED/v1/first-deployment \
          --template-file .dist/template.packaged.yaml \
          --stack-name apigateway-demo \
          --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_IAM
```

```
sam package --s3-bucket apigateway-demo-sam --s3-prefix PACKAGED/v5/first-deployment --output-template-file template.packaged.yaml
```

npm run build

```
sam deploy --s3-bucket apigateway-demo-sam  --s3-prefix PACKAGED/v5/first-deployment --template-file .dist/template.packaged.yaml --stack-name apigateway-demo --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_IAM
```
