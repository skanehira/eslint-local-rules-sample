import * as disallowUndefinedKeword from './disallowUndefinedKeword';
import { tester } from './tester';

tester.run('disallowUndefinedKeword', disallowUndefinedKeword.rule, {
  valid: [
    {
      code: `type T = { x?: string };`
    },
    {
      code: `type T = { x: string };`
    },
    {
      code: `type T = { x: undefined }`
    }
  ],
  invalid: [
    {
      code: `type T = { x: string | undefined }`,
      errors: [
        {
          messageId: disallowUndefinedKeword.messageId
        }
      ]
    }
  ]
});

