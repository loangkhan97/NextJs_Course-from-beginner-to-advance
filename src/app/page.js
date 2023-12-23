import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      < User name="Sohail"/>
      < User name="khan"/>
      
      <h1>Home Page</h1>
    </main>
  )
}

const User=(props)=> {
  return (
    <div>
      <h1>User name is {props.name}</h1>
    </div>
  )
}
