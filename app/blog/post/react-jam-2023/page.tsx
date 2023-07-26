export default function Page() {
  return (
    <main>
      <h1>React Jam 2023</h1>
      <p className="lead">
        Just last week, I fulfilled a long standing dream of mine: I
        participated in a game jam.{" "}
        <a href="https://reactjam.com/">React Jam</a> may not be the most
        prestigious out there, but as I&apos;m <em>kind of</em> good with React
        it was easy for me to create and finish something.
      </p>
      <p>
        I started in the jam without any intent of winning one of the
        challenges. But as jams go, I <em>was</em> in it to try something new
        and so I decided that I would follow the rules of both challenges. That
        meant creating a game running on the{" "}
        <a href="https://www.rune.ai/">Rune</a> platform, the jams sponsor.
      </p>
      <h2>
        <strong>Good:</strong> Everybodys tech stack
      </h2>
      <h2>
        <strong>Weird:</strong> The Rune SDK
      </h2>
      <p>
        Generally, I like the idea of Rune. It&apos;s a platform for multiplayer
        games that handles stuff like user accounts, friend lists and voice
        chat. It&apos;s still kind of new-ish so we will see if they can
        actually keep all their developer friendly promises, but right now
        everything about Rune seems nice.
      </p>
      <p>
        The SDK is basically just an elaborate state handler. I define what my
        game state looks like and then define some actions to transform that
        game state. On the client, my renderer has to react to changes in the
        game state and my call actions to change the game state. The framework
        then executes the action on my client for fast response times while
        simultanieously sending the action to the server where it is checked
        against the server logic. When the server says the action is okay
        it&apos;s forwarded to all the other clients. When the server can not
        confirm the action my client has to roll back.
      </p>
      <p>
        That&apos;s not exactly elaborate netcode, but for many use cases this
        gets the job done just fine. I&apos;m not creating a fighting game after
        all, so nobody will scream at me for not doing rollbacks, doing too much
        rollbacks or doing rollbacks wrong. I have know next to nothing about
        netcode and even less about fighting games, but everybody seems to be
        angry about rollbacks all the time. Anyway, the Rune SDK frees me from
        writing all the necessary boilerplate for state synchronization myself.
      </p>
      <p>
        Still, all in all, I find the SDK and platform to still be a bit
        lacking. My smaller complaint is that I have to write everything into a
        single logic file. That&apos;s right, a single file for everything
        except rendering. The whole game logic. I get why this is necessary to
        not complicate things on the server too much, and there&apos;s ways
        around that, but why isn&apos;t this already a thing in their official
        project scaffolding tool?
      </p>
      <p>
        My much bigger complaint is how the platform currently only supports a
        small number of types of games (if you care about people not cheating in
        your games). The game state synchronization always synchronizes the
        whole game state across all of the clients. So there&apos;s just no
        place to store hidden information in a secure way.
      </p>
      <p>
        I made a game about hidden roles and the roles are just ... there. Your
        browser receives the roles of everybody else and if you know where to
        look you can just do so. And that&apos;s extra bad considering that
        everything about Rune just <em>screams</em> board game and most board
        games have hidden information. Looking at the{" "}
        <a href="https://boardgamegeek.com/browse/boardgame">
          BoardGameGeek Top 50
        </a>{" "}
        the only game I can confidently say could be created on Rune is{" "}
        <em>7 Wonders Duel</em> (To be fair, I didn&apos;t play them all yet and
        it&apos;s been a while for a few of them - I think <em>Barrage</em> had
        a stack of cards?)
      </p>
      <h2>
        <strong>Good in a weird way:</strong> React
      </h2>
    </main>
  );
}
