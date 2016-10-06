/**
 * Module dependencies.
 */
var request = require('request');
var _ = require('underscore');
/**
 * Main function
 */
module.exports = function() {
};

/**
 * Replaces the default options with the custom user options
 *
 * @param {Options} userOptions
 */
function parseOptions(userOptions){
    /**
     * Default options
     */
    var options = {
    };
    return _.extend(options, userOptions);
}
