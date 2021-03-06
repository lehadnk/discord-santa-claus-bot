export class PhrasesGenerator
{
    public getOne(member_id: string): string
    {
        let phrases = this.getForMember(member_id);
        let key = Math.floor(Math.random() * phrases.length);
        return phrases[key];
    }

    private getForMember(member_id: string) {
        if (this.phrases[member_id] !== undefined) {
            return this.phrases[member_id];
        }

        return this.phrases.default;
    }

    private phrases = {
        // Dobrik
        '229173015408017409': [
            "Запомни, Добрик, бритая киска, а не бритая кошка.",
            "Добра тебе, Добрик, и твоей кошке Ф'Таагн, Разрушительнице Миров!",
            "Всего тебе хорошего, Добрик, и разбана в #dank-memes!",
        ],
        // Zuiva
        '227131579321942016': [
            'В новом году эти нищеброды не будут затирать тебе о справедливых ценах!',
            'В новом году ты совершенно точно получишь рейдспот!',
            'Желаю тебе в этом году заработать миллиард, Зуйва',
        ],
        '207169330549358592': [
            'test'
        ],
        'default': [
            'В новом году ты передамажишь всех там, где и не мечтал(а)!',
            'Тебя ждут новые приятные встречи на просторах Азерота!',
            'В этом году тебя возьмут в ключ, даже не глядя на Рио!',
            'В рейде ты не будешь умирать в числе первых на освоении!',
            'В новом году тебя будет быстро закидывать на БГ!',
            'Теперь ачивки будут выполняться легче и быстрее!',
            'Тебе выпадет то, чего ты так давно ждёшь!',
            'Даже если ты пойдёшь в рейд во вторник вечером, там будут нормальные игроки!',
            'В Замке Нафрия ты точно получишь кромку! ',
            'Пора пойти выбивать маунтов, которых не хватает! ',
            'Иногда стоит уступить вещь другому, и тогда потом уступят тебе! ',
            'В новом сезоне твоё Рио будет идти вверх!',
            'В новом году тебе будет везти на roll! ',
            'В новом году у тебя будет хорошая пати в мифик+!',
            'Тебя будет радовать еженедельное хранилище!',
            'Наконец-то будут суммонить тебя, а не ты!',
            'Тебя будут оставлять на замене, когда тебе будет лень рейдить!',
            'Тебя возьмут в основной состав и ты действительно будешь нужен!',
            'Ты легко разберешься с механиками Замка Нафрии и не будешь тупить!',
            'Если ты наткнёшься на рейд другой фракции, ты сможешь избежать драки!',
            'У тебя будет лучше получаться в PVP!',
            'Ты сделаешь больше, чем раньше! Пройдёшь рейд в новой сложности, закроешь ключ повыше, повысишь свой рейтинг на арене!',
            'PVP в открытом мире порадует тебя!',
            'Ты не будешь засыпать во время РТ!',
            'Тебя не будут задерживать неожиданные вещи, если у тебя РТ и ты будешь приходить во время!',
            'Ты заработаешь деньги на аукционе и тебе будет хватать на ремонт!',
            'Ты не будешь гореть, ведь вокруг тебя будут самые адекватные игроки!',
            'В новом году из твоих ключей не будут ливать!',
            'Ты закроешь в таймер много ключей и получишь много хорошего лута!',
            'Твой трансмог оценят по достоинству!',
            'Ты быстро найдёшь ответы на интересующие тебя вопросы на вовхеде!',
            'Ты будешь успевать нажать пот, когда нужно и будешь выживать!',
            'У тебя не будут выключать свет во время РТ!',
            'Твой fps будет на уровне весь год!',
            'У тебя не будет лагать интернет!',
            'Ты будешь получать настоящее удовольствие от игры!',
            'Ты будешь встречаться с друзьями как в Азероте, так и за его пределами!',
            'Ты доделаешь ачивки, которые долго хотел(а) сделать!',
            'У тебя будет тёплая ламповая компания для игры!',
            'Близзард порадует тебя в новом году!',
            'Именно твою специализацию будут апать!',
            'Тебя не коснутся очередные нерфы!',
        ]
    };
}