import { GuardLevel } from './const'

export interface User {
  /** 用户uid */
  uid: number
  /** 用户名 */
  uname: string
  /** 用户头像 */
  face?: string
  /** 用户牌子·*/
  badge?: {
    /** 是否点亮 */
    active: boolean
    /** 牌子名称 */
    name: string
    /** 牌子等级 */
    level: number
    /** 牌子颜色 */
    color: string
    /** 渐变色牌子，当用户长时间未消费，则会变为灰色，即 `#c0c0c0` */
    gradient?: [string, string, string]
    /** 主播信息 */
    anchor: {
      /** 主播uid */
      uid: number
      /** 主播用户名 */
      uname: string
      /** 主播房间号 */
      room_id: number
      /** 是否为本直播间 */
      is_same_room?: boolean
    }
  }
  /** 用户身份 */
  identity?: {
    /** 直播榜单排名 */
    rank: 0 | 1 | 2 | 3
    /** 大航海信息 */
    guard_level: GuardLevel
    /** 房管 */
    room_admin: boolean
  }
}

export interface Message<T> {
  /** 消息id */
  id: string,
  /** 接收消息的时间，毫秒时间戳 */
  timestamp: number,
  /** 消息类型 */
  type: string,
  /** 消息内容 */
  body: T
}
