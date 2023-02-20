// 从对象中排除相应字段，生成新对象
export default function omit<T extends Record<string, any>, P extends keyof T>(obj: T, args: P[]) {
    const newObj = {} as Omit<T, P>
    // 这里的 includes 使用“item as P”，使前后类型一致
    const keys = Object.keys(obj).filter((item) => !args.includes(item as P)) as Exclude<keyof T, P>[]
    keys.forEach((key) => {
        if (obj[key] !== undefined) newObj[key] = obj[key]
    })
    return newObj
}