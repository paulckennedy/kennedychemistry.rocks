const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
//const _ = require('lodash');
const axios = require('axios');
const { OnThisDayListType } = require('./on_this_day');
const { VocabularyType } = require('./vocabulary');
const { VideoType } = require('.//videos');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    OnThisDay: {
      type: OnThisDayListType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/onThisDayList/${args.id}`)
          .then(res => {
            return res.data;
          });
      }
    },
    Vocabulary: {
      type: VocabularyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/vocabulary/${args.id}`)
          .then(res => {
            return res.data;
          });
      }
    },
    MiscVideos: {
      type: VideoType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/miscVideos/${args.id}`)
          .then(res => {
            return res.data;
          });
      }
    },
    ElementVideos: {
      type: VideoType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/elementVideos/${args.id}`)
          .then(res => {
            return res.data;
          });
      }
    },
    MelScienceVideos: {
      type: VideoType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/melScienceVideos/${args.id}`)
          .then(res => {
            return res.data;
          });
      }
    },
    ChemistryMinuteVideos: {
      type: VideoType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/chemistryMinuteVideos/${args.id}`)
          .then(res => {
            return res.data;
          });
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
