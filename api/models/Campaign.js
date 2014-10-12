/**
* Campaign.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      eventId: {
        type: 'integer',
        autoIncrement: true,
        primaryKey: true
      },
      title: {
          type: 'string',
          required: true,
          size: 150
      },
      description: {
        type: 'text',
        required: true,
        size: 500
      },
      /*tags:{
        collection: 'tags',
        via: 'events'
      }*/
      eventDate: {
        type: 'datetime',
        required: true
      },
      location: {
        type: 'string',
        required: true,
        size: 100
      },
      tags: {
        type: 'string',
        required: 200
      }
  }
};
