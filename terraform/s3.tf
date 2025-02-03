resource "aws_s3_bucket" "opf_rmcatalog_test" {
  bucket = "opf-rmcatalog-test-123"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_website_configuration" "opf_rmcatalog_test_website_configuration" {
  bucket = aws_s3_bucket.opf_rmcatalog_test.id

  index_document {
    suffix = "index.html"
  }
}