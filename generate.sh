
./cryptogen generate --config=./crypto-config.yaml
./configtxgen -profile TwoOrgsOrdererGenesis -channelID system-channel -outputBlock ./channel-artifacts/genesis.block
./configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel
docker-compose -f docker-compose-cli.yaml up -d

