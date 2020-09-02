docker-compose -f docker-compose-cli.yaml down --volumes
docker rm -f  $`(docker ps -a -aq)`
chmod 777 -R .
rm -r crypto-config

docker rm -f  $`(docker ps -a -aq)`
docker rm -f  $`(docker ps -a )`
docker rm -f  $`(docker ps -aq)`
docker ps -a 
