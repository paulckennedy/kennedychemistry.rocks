const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;
//const _ = require('lodash');
const axios = require('axios');

const ResourceType = new GraphQLObjectType({
  name: 'Resource',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: resource => resource.id
    },
    title: {
      type: GraphQLString,
      resolve: resource => resource.title
    },
    href: {
      type: GraphQLString,
      resolve: resource => resource.href
    }
  })
});

const OnThisDayListType = new GraphQLObjectType({
  name: 'OnThisDay',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    },
    month: {
      type: GraphQLInt
    },
    day: {
      type: GraphQLInt
    },
    dateValue: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    resources: {
      type: new GraphQLList(ResourceType)
    },
    keywords: {
      type: new GraphQLList(ResourceType)
    }
  })
});

module.exports.OnThisDayListType = OnThisDayListType;
module.exports.ResourceType = ResourceType;
