const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const tokenGroup = token.length < 500;
        let decodedData;
        if(token && tokenGroup) {
            decodedData = jwt.verify(token, 'post-code');
            req.userId = decodedData?.id;
        }
        else {
            decodedData = jwt.verify(token);
            req.userId = decodedData?.sub;
  
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;