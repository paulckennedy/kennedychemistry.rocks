const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
//const _ = require('lodash');
const axios = require('axios');

const VideoType = new GraphQLObjectType({
  name: 'Video',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: video => video.id
    },
    title: {
      type: GraphQLString,
      resolve: video => video.title
    },
    thumbnail: {
      type: GraphQLString,
      resolve: video => video.thumbnail
    },
    video: {
      type: GraphQLString,
      resolve: video => video.video
    }
  })
});

module.exports.VideoType = VideoType;
