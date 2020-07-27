const assert = require('chai').assert ;
const middle = require('../middle');

describe("#middle", () => {
    it("returns 23 for [18 ,23 ,45]", () => {
      assert.deepEqual(middle([18, 23, 45]),[ 23 ]);
    });

    it("returns [12, 24] for [18 , 12, 24 ,45]", () => {
        assert.deepEqual(middle([18, 12, 24, 45]) ,[12, 24]);
      });

      it("returns [] for [18 ,23]", () => {
        assert.deepEqual(middle([18, 23]),[ ]);
      });
  });