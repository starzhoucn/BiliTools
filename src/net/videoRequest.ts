import { biliApi } from './api';
import { stringify } from 'qs';
import {
  ShareAddDto,
  RegionRankingVideosDto,
  DonatedCoinsForVideoDto,
  HeartbeatDto,
  AddCoinDto,
} from '../dto/Video.dto';
import { TaskConfig } from '../config/globalVar';

/**
 * 分享视频
 * @param aid 分享的视频av号
 */
export async function addShare(aid: number | string): Promise<ShareAddDto> {
  const reqData = {
    csrf: TaskConfig.BILIJCT,
    aid,
  };
  const { data } = await biliApi.post('/x/web-interface/share/add', stringify(reqData));

  return data;
}

/**
 * 获取视频分区列表
 * @param rid 分区编号
 * @param day 排行方式
 */
export async function getRegionRankingVideos(rid = 1, day = 3): Promise<RegionRankingVideosDto> {
  const { data } = await biliApi.get('/x/web-interface/ranking/region', {
    params: {
      rid,
      day,
    },
  });

  return data;
}

/**
 * 给该视频投币数量
 * @param aid 视频av号
 */
export async function donatedCoinsForVideo(aid: number): Promise<DonatedCoinsForVideoDto> {
  const { data } = await biliApi.get('/x/web-interface/archive/coins', {
    params: { aid },
  });

  return data;
}

/**
 * 上传视频已经观看时间
 * @param aid av号
 * @param playedTime 观看时间
 */
export async function uploadVideoHeartbeat(
  aid: number | string,
  playedTime: number,
): Promise<HeartbeatDto> {
  const { data } = await biliApi.post(
    '/x/click-interface/web/heartbeat',
    stringify({
      aid,
      played_time: playedTime,
    }),
  );

  return data;
}

/**
 * 投币
 * @param aid av号
 * @param multiply 硬币数
 * @param selectLike 是否点赞
 */
export async function addCoinForVideo(
  aid: number | string,
  multiply: 1 | 2,
  selectLike: 1 | 2,
): Promise<AddCoinDto> {
  const { data } = await biliApi.post(
    '/x/web-interface/coin/add',
    stringify({
      aid,
      multiply,
      selectLike,
      csrf: TaskConfig.BILIJCT,
      // cross_domain: true,
    }),
  );

  return data;
}
