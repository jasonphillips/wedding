var userFeed = new Instafeed({
    get: 'user',
    userId: 770148119,
    accessToken: '770148119.467ede5.f7a5a2a8f205490b95716169f81089d7',
    resolution: 'thumbnail',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
});
userFeed.run();
