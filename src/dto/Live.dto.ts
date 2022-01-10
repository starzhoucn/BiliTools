import { LiveHeartRuleId } from '../interface/LiveHeart';
import { ApiBaseProp, DoubleMessageProp, PureDataProp } from './BiLiBaseProp';

/** 直播签到 */
export interface LiveSignDto extends ApiBaseProp {
  data?: { text: string; hadSignDays: number; specialText: string } | null;
}

/** 直播签到信息 */
export interface LiveSignInfoDto extends ApiBaseProp {
  data?: {
    text: string;
    hadSignDays: number;
    specialText: string;
    status: 0 | 1;
  };
}

/** 获取瓜子状态 */
export interface SilverStatusDto extends ApiBaseProp {
  data: {
    silver: number; //银瓜子
    gold: number; //金瓜子
    coin: number; //硬币
    coin_2_silver_left: number; //
    silver_2_coin_left: 1 | 0; // (银瓜子到硬币)
    status: number;
    vip: number;
  };
}

/** 瓜子换硬币 */
export interface Silver2CoinDto extends PureDataProp {
  /**
   * 0 成功
   * 403 今日兑换过
   */
  code: number;
  data: {
    coin: number;
    gold: number;
    silver: number;
    /** eg: Silver2Coin00000000000000000000000 */
    tid: string;
  };
}

/** 我的钱包 */
export interface MyWalletDto extends ApiBaseProp {
  data: {
    gold: number;
    silver: number;
    bp: string;
    /** 硬币数 */
    metal: number;
  };
}

export interface FansMedalDto {
  medal: {
    uid: number;
    target_id: number;
    target_name: string;
    medal_id: number;
    level: number;
    medal_name: string;
    medal_color: number;
    intimacy: number;
    next_intimacy: number;
    day_limit: number;
    today_feed: number;
    medal_color_start: number;
    medal_color_end: number;
    medal_color_border: number;
    is_lighted: number;
    guard_level: number;
    wearing_status: number;
    medal_icon_id: number;
    medal_icon_url: '';
  };
  anchor_info: {
    nick_name: string;
    avatar: string;
    verify: number;
  };
  superscript: null;
  room_info: {
    room_id: number;
    living_status: number;
    url: string;
  };
}

export interface FansMedalPanelDto extends ApiBaseProp {
  data: {
    list: FansMedalDto[];
    special_list: FansMedalDto[];
    bottom_bar: null;
    page_info: {
      number: number;
      current_page: number;
      has_more: true;
      next_page: number;
      next_light_status: number;
    };
    total_number: number;
  };
}

/** 直播礼物背包列表 */
export interface LiveGiftBagListDto extends ApiBaseProp {
  data: {
    list: {
      bag_id: number;
      /** 1 辣条 30607 小星星 */
      gift_id: number;
      gift_name: string;
      gift_num: number;
      gift_type: number;
      /** 到期时间 unix 时间戳 */
      expire_at: number;
      /** 还剩时间 eg：1天 */
      corner_mark: string;
      corner_color: string;
      count_map: { num: number; text: string }[];
      bind_roomid: number;
      bind_room_text: string;
      type: number;
      // card_image: string;
      // card_gif: string;
      // card_id: number;
      // card_record_id: number;
      // is_show_send: boolean;
    }[];
    time: string;
  };
}

/** 赠送礼物后的响应 */
export interface BagSendResDto extends ApiBaseProp {
  data: {
    uid: number;
    uname: string;
    guard_level: number;
    ruid: number;
    room_id: number;
    total_coin: number;
    pay_coin: number;
    blow_switch: number;
    send_tips: string;
    gift_id: number;
    gift_type: number;
    gift_name: string;
    gift_num: number;
    gift_action: string;
    gift_price: number;
    coin_type: string;
  };
}

/** 心跳返回数据 */
export interface LiveHeartEDto extends ApiBaseProp {
  data: {
    timestamp: number;
    heartbeat_interval: number;
    secret_key: string;
    secret_rule: LiveHeartRuleId;
    patch_status?: number;
    reason?: string[];
  };
}

export interface LiveFansMedalItem {
  can_deleted: true;
  day_limit: number;
  guard_level: number;
  guard_medal_title: string;
  intimacy: number;
  is_lighted: number;
  level: number;
  medal_name: string;
  medal_color_border: number;
  medal_color_end: number;
  medal_color_start: number;
  medal_id: number;
  next_intimacy: number;
  today_feed: number;
  roomid: number;
  status: number;
  target_id: number;
  target_name: string;
  uname: string;
}

/** 获取有牌子的 */
export interface LiveFansMedalDto extends PureDataProp {
  data: {
    count: number;
    items: LiveFansMedalItem[];
    page_info: {
      cur_page: number;
      total_page: number;
    };
  };
}

/** 获取直播间信息 */
export interface LiveRoomInfoDto extends DoubleMessageProp {
  data: {
    /** 被查询者的 mid */
    uid: number;
    room_id: number;
    short_id: number;
    attention: number;
    online: number;
    is_portrait: false;
    description: string;
    live_status: number;
    area_id: number;
    parent_area_id: number;
    parent_area_name: string;
    old_area_id: number;
    background: string;
    title: string;
    user_cover: string;
    keyframe: string;
    is_strict_room: false;
    live_time: string;
    tags: string;
    is_anchor: number;
    room_silent_type: string;
    room_silent_level: number;
    room_silent_second: number;
    area_name: string;
    pendants: string;
    area_pendants: string;
    hot_words: string[];
    hot_words_status: number;
    verify: string;
    new_pendants: Record<string, unknown>;
    up_session: string;
    pk_status: number;
    pk_id: number;
    battle_id: number;
    allow_change_area_time: number;
    allow_upload_cover_time: number;
    studio_info: {
      status: number;
      master_list: [];
    };
  };
}
