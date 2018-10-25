const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
//const _ = require('lodash');
const axios = require('axios');

const VocabularyType = new GraphQLObjectType({
  name: 'Vocabulary',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: vocabulary => vocabulary.id
    },
    chapter: {
      type: GraphQLInt,
      resolve: vocabulary => vocabulary.chapter
    },
    word: {
      type: GraphQLString,
      resolve: vocabulary => vocabulary.word
    },
    definition: {
      type: GraphQLString,
      resolve: vocabulary => vocabulary.definition
    }
  })
});

module.exports.VocabularyType = VocabularyType;
