import os from 'os'

class SystemWatcher {
	constructor() {
    this.timer = 0
		this.timerActive = false
		this.loadAvg = null
  }

	startTimer = () => {
		//30秒获取一次系统负载信息
		this.timer = setInterval( () => {
			if( this.timerActive ){
				this.loadAvg = os.loadavg()
			} else {
				clearInterval(this.timer)
				this.timer = 0
			}
			this.timerActive = false
		}, 30 * 1000)
		this.loadAvg = os.loadavg()
	}

	getLoad = () => {
		this.timerActive = true
		if( !this.timer ){
			this.startTimer()
		}
		return this.loadAvg
	}

	isOverload = ( baseLine = 0.85 ) => {
		const loadAvg = this.getLoad()
		if( loadAvg[0] && loadAvg[0] > baseLine ){
			return true
		}
		return false
	}
}

const systemWatcher = new SystemWatcher()

export default systemWatcher