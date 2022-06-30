ssh -i ~/Desktop/pem/mullaelive.pem ubuntu@54.180.169.236 "rm -rf /opt/mullaelive/*"
scp -i ~/Desktop/pem/mullaelive.pem -r ~/Desktop/d/mullaelive-web-bak/build/* ubuntu@54.180.169.236:/opt/mullaelive
