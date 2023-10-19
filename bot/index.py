from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, ConversationHandler, CallbackContext

# Этот обработчик будет вызываться при команде /start
def start(update: Update, context: CallbackContext) -> int:
    user = update.effective_user
    update.message.reply_html(
        fr"Привет, {user.mention_html()}!",
        reply_markup=ReplyKeyboardRemove(),
    )

    return CHOOSING

# Этот обработчик будет вызываться при команде /cancel
def cancel(update: Update, context: CallbackContext) -> int:
    user = update.message.from_user
    update.message.reply_html(
        fr"{user.mention_html()}, действие отменено.",
        reply_markup=ReplyKeyboardRemove(),
    )

    return ConversationHandler.END

# Определите состояния для диалога
CHOOSING, TYPING_REPLY = range(2)

# Создайте ConversationHandler
conv_handler = ConversationHandler(
    entry_points=[CommandHandler('start', start)],
    states={
        CHOOSING: [
            MessageHandler(
                Filters.regex('^(Понедельник|Вторник|Среда|Четверг|Пятница|Суббота)$'), schedule
            )
        ],
        TYPING_REPLY: [MessageHandler(Filters.text & ~(Filters.command | Filters.regex('^Отмена$')), reply)]
    },
    fallbacks=[CommandHandler('cancel', cancel)],
)

def main() -> None:
    # Инициализируем Updater и регистрируем обработчики
    updater = Updater(token='YOUR_BOT_TOKEN', use_context=True)
    dispatcher = updater.dispatcher

    dispatcher.add_handler(conv_handler)

    # Запускаем бота
    updater.start_polling()

if __name__ == '__main__':
    main()
