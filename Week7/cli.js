.usage{}
.command{
    play<game>
    play card games,
    (yargs) => (
        return yargs.positional('game',{
            describe: "name of card game",
            type: "string",
            choices: ["poker", "blackjack"]
        })
        .options:
    );
}