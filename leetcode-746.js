// leetcode 746
// language: js
// https://leetcode.com/problems/min-cost-climbing-stairs/
// author: yujin19
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // null check
  if (!cost || cost.length === 0) return 0;
  let dp = new Array(cost.length).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};

/**
 * notes:
 * 1. dp[i]: the min cost to go up from ith stair
 * 2. dp[0] and dp[1] are base case for stair 0 and stair 1
 * 3. dp[i] = min{dp[i - 1], dp[i - 2]} + cost[i]
 * 4. return min{dp[length - 1], dp[length - 2]};
 */
