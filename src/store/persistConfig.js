import storage from 'redux-persist/lib/storage'; 
import { encryptTransform } from 'redux-persist-transform-encrypt';

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: 'Portal-prototype', 
            onError: function (error) {
                
            },
        }),
    ],
};

export default persistConfig;
