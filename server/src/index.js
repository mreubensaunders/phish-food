const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    feed: (parent, args, context) => {
      return context.prisma.posts({ where: { published: true }, orderBy: args.createdAt_ASC})
    },
    drafts: (parent, args, context) => {
      return context.prisma.posts({ where: { published: false } })
    },
    subs: (parent, args, context) => {
      return context.prisma.subs()
    },
    airdrops: (parent, args, context) => {
      return context.prisma.airdrops()
    },
    post: (parent, { id }, context) => {
      return context.prisma.post({ id })
    },
  },
  Mutation: {
    createAirdrop(parent, {name}, context){
      return context.prisma.createAirdrop({
        name          
      })
    },
    createDraft(parent, { title, content }, context) {
      return context.prisma.createPost({
        title,
        content,
      })
    },
    createSub(parent, { email, content }, context) {
      return context.prisma.createSub({
        email,
        content,
      })
    },
    deletePost(parent, { id }, context) {
      return context.prisma.deletePost({ id })
    },
    publish(parent, { id }, context) {
      return context.prisma.updatePost({
        where: { id },
        data: { published: true },
      })
    },
    like(parent, { id, count }, context) {
      return context.prisma.updatePost({
        where: { id },
        data: { likes: count },
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
