import { Resolvers } from './resolvers-types';

export const resolvers: Resolvers = {
  Query: {
    links: async (parents, args, ctx) => {
      const results = await ctx.prisma.link.findMany();
      // quem diz se queremos id, title, body ou outro é o graphql
      return results;
    },
  },
};
