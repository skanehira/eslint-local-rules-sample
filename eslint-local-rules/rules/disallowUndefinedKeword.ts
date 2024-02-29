import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  name => `https://example.com/rule/${name}`,
);

export const messageId = 'disallow-undefined-keyword';

export const rule = createRule({
  create(context) {
    return {
      TSTypeAliasDeclaration: (node) => {
        if (node.typeAnnotation.type === AST_NODE_TYPES.TSTypeLiteral) {
          for (const member of node.typeAnnotation.members) {
            if (member.type == AST_NODE_TYPES.TSPropertySignature) {
              if (
                member.typeAnnotation?.typeAnnotation.type ===
                AST_NODE_TYPES.TSUnionType
              ) {
                const found = member.typeAnnotation.typeAnnotation.types.find(
                  (node) => node.type === AST_NODE_TYPES.TSUndefinedKeyword
                );
                if (found) {
                  context.report({
                    messageId,
                    node: found
                  });
                }
              }
            }
          }
        }
      }
    };
  },
  name: messageId,
  meta: {
    docs: {
      description: 'Disallow undefined keyword when property declaration',
    },
    messages: {
      [messageId]: 'Please use `?` instead of `T | undefined`'
    },
    type: 'problem',
    schema: []
  },
  defaultOptions: []
});
