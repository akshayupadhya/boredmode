import { exec } from 'child_process'
import { config } from 'dotenv'

config()

if (process.env.NODE_ENV !== 'development') {
	console.log('building')
	exec('npm run build',
		(err, stdout, stderr) => {
			if (err) {
				console.log(err)
			}
			console.log(stdout)
		})
}
