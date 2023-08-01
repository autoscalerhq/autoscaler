#!/bin/bash
#sleep 20
# Get CSRF Token
CSRF_TOKEN=$(curl http://127.0.0.1:7750/pulsar-manager/csrf-token)

# Create or update user using the CSRF token
curl \
-H "X-XSRF-TOKEN: $CSRF_TOKEN" \
-H "Cookie: XSRF-TOKEN=$CSRF_TOKEN;" \
-H 'Content-Type: application/json' \
-X PUT http://127.0.0.1:7750/pulsar-manager/users/superuser \
-d '{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}'
#
## Create necessary topics
#docker exec -w /bin/pulsar-admin autoscaler_pulsar pulsar-admin topics create persistent://pulsar/system/processing-topic \
#pulsar-admin topics create persistent://pulsar/system/processing-topic
