// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import ClientClass4, {DEFAULT_LIMIT_AFTER, DEFAULT_LIMIT_BEFORE, HEADER_X_VERSION_ID} from './client4';

const Client4 = new ClientClass4();

export {
    Client4,
    DEFAULT_LIMIT_AFTER,
    DEFAULT_LIMIT_BEFORE,
    HEADER_X_VERSION_ID,
};

Client4.setUrl("http://localhost:8065");
Client4.setToken('izk6ic5wdp8qickwzhb6qjzamw');

Client4.getMe().then(console.log);
