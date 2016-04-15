/**
 * Database Configurations
 */
exports.db = {
		"host" : "IP_FOF_DB",
		"port" : PORT_FOR_DB,
		"user" : "USERNAME_FOR_DB",
		"password" : "PASSWORD_FOR_DB",
		"database" : "DATABASE_NAME",
		"connectionLimit" : 100
	};

/**
 * Database Pooling Configurations
 */
exports.dbPool = {
		"maxSize" : 50
};
