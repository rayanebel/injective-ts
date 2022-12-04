import {
  dataToExecData,
  ExecArgBase,
  ExecDataRepresentation,
} from '../ExecArgBase'

export declare namespace ExecArgUpdateSpotVaultConfig {
  export interface Params {
    marketId: string
    subaccountId: string
    feeRecipient: string
    orderDensity: number
    reservationPriceSensitivityRatio: string
    reservationSpreadSensitivityRatio: string
    maxActiveCapitalUtilizationRatio: string
    headChangeToleranceRatio: string
    fairPriceTailDeviationRatio: string
    minHeadToTailDeviationRatio: string
    signedMinHeadToFairPriceDeviationRatio: string
    signedMinHeadToTobDeviationRatio: string
    targetBaseWeight: string
    oracleType: string
    tradeVolatilityGroupCount: number
    tradeVolatilityGroupSec: number
    minTradeVolatilitySampleSize: number
    defaultMidPriceVolatilityRatio: string
  }

  export interface Data {
    market_id: string
    subaccount_id: string
    fee_recipient: string
    order_density: number
    reservation_price_sensitivity_ratio: string
    reservation_spread_sensitivity_ratio: string
    max_active_capital_utilization_ratio: string
    head_change_tolerance_ratio: string
    fair_price_tail_deviation_ratio: string
    min_head_to_tail_deviation_ratio: string
    signed_min_head_to_fair_price_deviation_ratio: string
    signed_min_head_to_tob_deviation_ratio: string
    target_base_weight: string
    oracle_type: string
    trade_volatility_group_count: number
    trade_volatility_group_sec: number
    min_trade_volatility_sample_size: number
    default_mid_price_volatility_ratio: string
  }
}

/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateSpotVaultConfig extends ExecArgBase<
  ExecArgUpdateSpotVaultConfig.Params,
  ExecArgUpdateSpotVaultConfig.Data
> {
  static fromJSON(
    params: ExecArgUpdateSpotVaultConfig.Params,
  ): ExecArgUpdateSpotVaultConfig {
    return new ExecArgUpdateSpotVaultConfig(params)
  }

  toData(): ExecArgUpdateSpotVaultConfig.Data {
    const { params } = this

    return {
      market_id: params.marketId,
      subaccount_id: params.subaccountId,
      fee_recipient: params.feeRecipient,
      order_density: params.orderDensity,
      reservation_price_sensitivity_ratio:
        params.reservationPriceSensitivityRatio,
      reservation_spread_sensitivity_ratio:
        params.reservationSpreadSensitivityRatio,
      max_active_capital_utilization_ratio:
        params.maxActiveCapitalUtilizationRatio,
      head_change_tolerance_ratio: params.headChangeToleranceRatio,
      fair_price_tail_deviation_ratio: params.fairPriceTailDeviationRatio,
      min_head_to_tail_deviation_ratio: params.minHeadToTailDeviationRatio,
      signed_min_head_to_fair_price_deviation_ratio:
        params.signedMinHeadToFairPriceDeviationRatio,
      signed_min_head_to_tob_deviation_ratio:
        params.signedMinHeadToTobDeviationRatio,
      target_base_weight: params.targetBaseWeight,
      oracle_type: params.oracleType,
      trade_volatility_group_count: params.tradeVolatilityGroupCount,
      trade_volatility_group_sec: params.tradeVolatilityGroupSec,
      min_trade_volatility_sample_size: params.minTradeVolatilitySampleSize,
      default_mid_price_volatility_ratio: params.defaultMidPriceVolatilityRatio,
    }
  }

  toExecData(): ExecDataRepresentation<ExecArgUpdateSpotVaultConfig.Data> {
    return dataToExecData('update_vault_config', this.toData())
  }
}