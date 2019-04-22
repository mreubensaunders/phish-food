module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAirdrop {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateSub {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Airdrop {
  id: ID!
  name: String!
  author: User
  updatedAt: DateTime!
  createdAt: DateTime!
}

type AirdropConnection {
  pageInfo: PageInfo!
  edges: [AirdropEdge]!
  aggregate: AggregateAirdrop!
}

input AirdropCreateInput {
  name: String!
  author: UserCreateOneWithoutOutgoingAirdropsInput
}

input AirdropCreateManyWithoutAuthorInput {
  create: [AirdropCreateWithoutAuthorInput!]
  connect: [AirdropWhereUniqueInput!]
}

input AirdropCreateWithoutAuthorInput {
  name: String!
}

type AirdropEdge {
  node: Airdrop!
  cursor: String!
}

enum AirdropOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AirdropPreviousValues {
  id: ID!
  name: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

input AirdropScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AirdropScalarWhereInput!]
  OR: [AirdropScalarWhereInput!]
  NOT: [AirdropScalarWhereInput!]
}

type AirdropSubscriptionPayload {
  mutation: MutationType!
  node: Airdrop
  updatedFields: [String!]
  previousValues: AirdropPreviousValues
}

input AirdropSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AirdropWhereInput
  AND: [AirdropSubscriptionWhereInput!]
  OR: [AirdropSubscriptionWhereInput!]
  NOT: [AirdropSubscriptionWhereInput!]
}

input AirdropUpdateInput {
  name: String
  author: UserUpdateOneWithoutOutgoingAirdropsInput
}

input AirdropUpdateManyDataInput {
  name: String
}

input AirdropUpdateManyMutationInput {
  name: String
}

input AirdropUpdateManyWithoutAuthorInput {
  create: [AirdropCreateWithoutAuthorInput!]
  delete: [AirdropWhereUniqueInput!]
  connect: [AirdropWhereUniqueInput!]
  disconnect: [AirdropWhereUniqueInput!]
  update: [AirdropUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [AirdropUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [AirdropScalarWhereInput!]
  updateMany: [AirdropUpdateManyWithWhereNestedInput!]
}

input AirdropUpdateManyWithWhereNestedInput {
  where: AirdropScalarWhereInput!
  data: AirdropUpdateManyDataInput!
}

input AirdropUpdateWithoutAuthorDataInput {
  name: String
}

input AirdropUpdateWithWhereUniqueWithoutAuthorInput {
  where: AirdropWhereUniqueInput!
  data: AirdropUpdateWithoutAuthorDataInput!
}

input AirdropUpsertWithWhereUniqueWithoutAuthorInput {
  where: AirdropWhereUniqueInput!
  update: AirdropUpdateWithoutAuthorDataInput!
  create: AirdropCreateWithoutAuthorInput!
}

input AirdropWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  author: UserWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AirdropWhereInput!]
  OR: [AirdropWhereInput!]
  NOT: [AirdropWhereInput!]
}

input AirdropWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAirdrop(data: AirdropCreateInput!): Airdrop!
  updateAirdrop(data: AirdropUpdateInput!, where: AirdropWhereUniqueInput!): Airdrop
  updateManyAirdrops(data: AirdropUpdateManyMutationInput!, where: AirdropWhereInput): BatchPayload!
  upsertAirdrop(where: AirdropWhereUniqueInput!, create: AirdropCreateInput!, update: AirdropUpdateInput!): Airdrop!
  deleteAirdrop(where: AirdropWhereUniqueInput!): Airdrop
  deleteManyAirdrops(where: AirdropWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createSub(data: SubCreateInput!): Sub!
  updateSub(data: SubUpdateInput!, where: SubWhereUniqueInput!): Sub
  updateManySubs(data: SubUpdateManyMutationInput!, where: SubWhereInput): BatchPayload!
  upsertSub(where: SubWhereUniqueInput!, create: SubCreateInput!, update: SubUpdateInput!): Sub!
  deleteSub(where: SubWhereUniqueInput!): Sub
  deleteManySubs(where: SubWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  published: Boolean!
  title: String!
  content: String!
  updatedAt: DateTime!
  createdAt: DateTime!
  likes: Int
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  published: Boolean
  title: String!
  content: String!
  likes: Int
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
  likes_ASC
  likes_DESC
}

type PostPreviousValues {
  id: ID!
  published: Boolean!
  title: String!
  content: String!
  updatedAt: DateTime!
  createdAt: DateTime!
  likes: Int
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  published: Boolean
  title: String
  content: String
  likes: Int
}

input PostUpdateManyMutationInput {
  published: Boolean
  title: String
  content: String
  likes: Int
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  likes: Int
  likes_not: Int
  likes_in: [Int!]
  likes_not_in: [Int!]
  likes_lt: Int
  likes_lte: Int
  likes_gt: Int
  likes_gte: Int
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  airdrop(where: AirdropWhereUniqueInput!): Airdrop
  airdrops(where: AirdropWhereInput, orderBy: AirdropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Airdrop]!
  airdropsConnection(where: AirdropWhereInput, orderBy: AirdropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AirdropConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  sub(where: SubWhereUniqueInput!): Sub
  subs(where: SubWhereInput, orderBy: SubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sub]!
  subsConnection(where: SubWhereInput, orderBy: SubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Sub {
  id: ID!
  email: String!
  content: String!
}

type SubConnection {
  pageInfo: PageInfo!
  edges: [SubEdge]!
  aggregate: AggregateSub!
}

input SubCreateInput {
  email: String!
  content: String!
}

type SubEdge {
  node: Sub!
  cursor: String!
}

enum SubOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SubPreviousValues {
  id: ID!
  email: String!
  content: String!
}

type Subscription {
  airdrop(where: AirdropSubscriptionWhereInput): AirdropSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  sub(where: SubSubscriptionWhereInput): SubSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type SubSubscriptionPayload {
  mutation: MutationType!
  node: Sub
  updatedFields: [String!]
  previousValues: SubPreviousValues
}

input SubSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubWhereInput
  AND: [SubSubscriptionWhereInput!]
  OR: [SubSubscriptionWhereInput!]
  NOT: [SubSubscriptionWhereInput!]
}

input SubUpdateInput {
  email: String
  content: String
}

input SubUpdateManyMutationInput {
  email: String
  content: String
}

input SubWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [SubWhereInput!]
  OR: [SubWhereInput!]
  NOT: [SubWhereInput!]
}

input SubWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  outgoingAirdrops(where: AirdropWhereInput, orderBy: AirdropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Airdrop!]
  updatedAt: DateTime!
  createdAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  outgoingAirdrops: AirdropCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutOutgoingAirdropsInput {
  create: UserCreateWithoutOutgoingAirdropsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutOutgoingAirdropsInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  outgoingAirdrops: AirdropUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneWithoutOutgoingAirdropsInput {
  create: UserCreateWithoutOutgoingAirdropsInput
  update: UserUpdateWithoutOutgoingAirdropsDataInput
  upsert: UserUpsertWithoutOutgoingAirdropsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutOutgoingAirdropsDataInput {
  name: String
}

input UserUpsertWithoutOutgoingAirdropsInput {
  update: UserUpdateWithoutOutgoingAirdropsDataInput!
  create: UserCreateWithoutOutgoingAirdropsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  outgoingAirdrops_every: AirdropWhereInput
  outgoingAirdrops_some: AirdropWhereInput
  outgoingAirdrops_none: AirdropWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    