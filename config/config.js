if(process.env.NODE_ENV === 'production'){        
        module.exports = {
            dbUser: process.env.DB_USER,
            dbPass: process.env.DB_PASS
        }
}else {
        module.exports = {
            dbUser: 'mandisushil306',
            dbPass: 'mandisushil306'
        }
}
    
