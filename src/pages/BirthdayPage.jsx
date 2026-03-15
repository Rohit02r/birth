import { motion } from "framer-motion"

function BirthdayPage(){

return(

<div className="birthdayPage">

<div className="backgroundGlow"></div>
<div className="backgroundGlow2"></div>

<motion.div
className="glassCard"
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:0.8}}
>

<motion.h1
className="birthdayTitle"
initial={{y:-40,opacity:0}}
animate={{y:0,opacity:1}}
transition={{delay:0.3}}
>
🎉 Happy Birthday Priya🎉
</motion.h1>

<motion.img
src="/p.jpg"
className="birthdayImage"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.7}}
/>

<motion.h2
className="birthdayWish"
initial={{y:50,opacity:0}}
animate={{y:0,opacity:1}}
transition={{delay:1}}
>
Wishing you happiness, laughter and unforgettable moments 💚
</motion.h2>


{/* Quotes */}

<div className="quoteBox">

<p>✨ Another year older, another year more amazing.</p>
<p>✨ May your dreams grow bigger and your worries smaller.</p>
<p>✨ You deserve all the happiness in the world.</p>
<p>✨ Keep shining and spreading positivity everywhere.</p>

</div>


{/* Special Day Card */}

<div className="specialDay">

<h3>🎂 Today is your day</h3>

<p>
Celebrate every moment today because it belongs to you.
May laughter, love and beautiful memories fill your day.
</p>

</div>


{/* Wishes Grid */}

<div className="wishGrid">

<div className="wishCard">
🎁 Success in everything you do
</div>

<div className="wishCard">
🌟 Happiness that never fades
</div>

<div className="wishCard">
💚 Good health and peace
</div>

<div className="wishCard">
✨ A year full of amazing surprises
</div>

</div>


{/* Personal Message */}

<div className="personalMessage">

<h3>💌 A Special Message</h3>

<p>
Intha nerathuku kandu pidichitu irupa itha yar itha pannaganu, i wanted you to be happy, keep similing once again wishing you the Happy 18th , keep Glowing ❤️, azhagi❣️❣️❣️
</p>

</div>

</motion.div>

</div>

)

}

export default BirthdayPage