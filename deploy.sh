npm run build
export AWS_PROFILE=personal
aws s3 rm s3://ykjhweddinginvitation --recursive
aws s3 cp build s3://ykjhweddinginvitation --recursive
aws cloudfront create-invalidation --distribution-id E2YQHLIRMRUB0T --paths "/*"
