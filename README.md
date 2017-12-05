# TZ to UTC

> Convert TZ to UTC number CLI

## Install

```
npm install -g tz-to-utc-cli
```

## Usage

### parameters

| Field      |                             | Description                      |
|------------|-----------------------------|----------------------------------|
|`tz`        | Required                    | Timezone (`America/Los_Angeles`) |
|`withPrefix`| Optional (default: `false`) | Prefix `UTC` or not              |


```bash
$ tztoutc America/Los_Angeles
$ -8

$ tztoutc Asia/Ho_Chi_Minh y
$ UTC+7

$ tztoutc Asia/Ha_Noi
$ Invalid TimeZone
```

## License

MIT