export async function NowShowing(date: string) {
  return fetch('https://www.cinemapolis.org/graphql', {
    method: 'POST',
    body: JSON.stringify({
      "operationName": null,
      "variables": {
        "date": date,
        "ids": [],
        "movieId": null,
        "movieIds": [],
        "titleClassId": null,
        "titleClassIds": null,
        "siteIds": null,
        "anyShowingBadgeIds": null,
        "everyShowingBadgeIds": [null],
        "skip": false,
        "resultVersion": null
      },
      "query": `
        query (
          $date: String, {
          showingsForDate(
            date: $date
          ) {
            data {
              id
              time
              showingId
              published
              movie {
                id
                name
                showingStatus
                displayMetaData
                urlSlug
                posterImage
                signageDisplayPoster
                bannerImage
                signageDisplayBanner
                animatedPosterVideo
                signageDisplayAnimatedPoster
                signageMessageOverride
                color
                synopsis
                starring
                directedBy
                producedBy
                searchTerms
                duration
                genre
                allGenres
                rating
                ratingReason
                trailerYoutubeId
                trailerVideo
                signageDisplayTrailer
                releaseDate
                dateOfFirstShowing
                overrideDateOfFirstShowing
                hideDateOfFirstShowing
                embargoShowingLiftedAt
                isMarathon
                predictedWeekOneTicketSales
                tmdbPopularityScore
                tmdbId
                includeInComingSoon
                includeInFuture
                overridePriceCard
                overridePostStartTimeBufferMinutes
                customPostStartTimeBufferMinutes
                sendRentrak
                rentrakName
                allowPastSales
                dcmEdiMovieId
                dcmEdiMovieName
                disableOnlineConcessions
                overrideMaxTicketsPerOrderPerShowing
                maxTicketsPerOrderPerShowing
                siteId
                titleClassId
                customPriceCardId
                __typename
              }
              showing {
                id
                time
                showingId
                isMarathon
                hasMarathon
                allowSalesInMarathon
                overrideSeatChart
                hasSeatChart
                overridePriceCard
                overridePostStartTimeBufferMinutes
                customPostStartTimeBufferMinutes
                published
                ticketsSold
                marathonTicketsSold
                ticketsPaid
                current
                past
                overrideReservedSeating
                overrideReservedSeatingValue
                customHeldSeatCount
                overrideHeldSeatCount
                customMarathonSeatCount
                overrideMarathonSeatCount
                overrideShowingBadges
                allowWithoutMembership
                allowItemOrdersOnline
                private
                isPreview
                displayMetaData
                overrideMaxTicketsPerOrderPerShowing
                maxTicketsPerOrderPerShowing
                screenId
                originalScreenId
                priceCardId
                customPriceCardId
                movie {
                  id
                  name
                  showingStatus
                  displayMetaData
                  urlSlug
                  posterImage
                  signageDisplayPoster
                  bannerImage
                  signageDisplayBanner
                  animatedPosterVideo
                  signageDisplayAnimatedPoster
                  signageMessageOverride
                  color
                  synopsis
                  starring
                  directedBy
                  producedBy
                  searchTerms
                  duration
                  genre
                  allGenres
                  rating
                  ratingReason
                  trailerYoutubeId
                  trailerVideo
                  signageDisplayTrailer
                  releaseDate
                  dateOfFirstShowing
                  overrideDateOfFirstShowing
                  hideDateOfFirstShowing
                  embargoShowingLiftedAt
                  isMarathon
                  predictedWeekOneTicketSales
                  tmdbPopularityScore
                  tmdbId
                  includeInComingSoon
                  includeInFuture
                  overridePriceCard
                  overridePostStartTimeBufferMinutes
                  customPostStartTimeBufferMinutes
                  sendRentrak
                  rentrakName
                  allowPastSales
                  dcmEdiMovieId
                  dcmEdiMovieName
                  disableOnlineConcessions
                  overrideMaxTicketsPerOrderPerShowing
                  maxTicketsPerOrderPerShowing
                  siteId
                  titleClassId
                  customPriceCardId
                  __typename
                }
                seatsRemaining
                seatsRemainingWithoutSocialDistancing
                __typename
              }
              showings {
                id
                time
                showingId
                isMarathon
                hasMarathon
                allowSalesInMarathon
                overrideSeatChart
                hasSeatChart
                overridePriceCard
                overridePostStartTimeBufferMinutes
                customPostStartTimeBufferMinutes
                published
                ticketsSold
                marathonTicketsSold
                ticketsPaid
                current
                past
                overrideReservedSeating
                overrideReservedSeatingValue
                customHeldSeatCount
                overrideHeldSeatCount
                customMarathonSeatCount
                overrideMarathonSeatCount
                overrideShowingBadges
                allowWithoutMembership
                allowItemOrdersOnline
                private
                isPreview
                displayMetaData
                overrideMaxTicketsPerOrderPerShowing
                maxTicketsPerOrderPerShowing
                screenId
                originalScreenId
                priceCardId
                customPriceCardId
                movie {
                  id
                  name
                  showingStatus
                  displayMetaData
                  urlSlug
                  posterImage
                  signageDisplayPoster
                  bannerImage
                  signageDisplayBanner
                  animatedPosterVideo
                  signageDisplayAnimatedPoster
                  signageMessageOverride
                  color
                  synopsis
                  starring
                  directedBy
                  producedBy
                  searchTerms
                  duration
                  genre
                  allGenres
                  rating
                  ratingReason
                  trailerYoutubeId
                  trailerVideo
                  signageDisplayTrailer
                  releaseDate
                  dateOfFirstShowing
                  overrideDateOfFirstShowing
                  hideDateOfFirstShowing
                  embargoShowingLiftedAt
                  isMarathon
                  predictedWeekOneTicketSales
                  tmdbPopularityScore
                  tmdbId
                  includeInComingSoon
                  includeInFuture
                  overridePriceCard
                  overridePostStartTimeBufferMinutes
                  customPostStartTimeBufferMinutes
                  sendRentrak
                  rentrakName
                  allowPastSales
                  dcmEdiMovieId
                  dcmEdiMovieName
                  disableOnlineConcessions
                  overrideMaxTicketsPerOrderPerShowing
                  maxTicketsPerOrderPerShowing
                  siteId
                  titleClassId
                  customPriceCardId
                  __typename
                }
                seatsRemaining
                seatsRemainingWithoutSocialDistancing
                __typename
              }
              showingBadgeIds
              predictedAttendance
              seatsRemaining
              seatsRemainingWithoutSocialDistancing
              __typename
            }
            count
            resultVersion
            __typename
          }
        }
      `
    })
  })
}